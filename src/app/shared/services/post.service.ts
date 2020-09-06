import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { FormattedPost, PostDetails } from '../../post-details/PostDetails';

const REDDIT_API = 'https://www.reddit.com/';

@Injectable({
    providedIn: 'root',
})
export class PostService implements OnDestroy {

    currentPage = 1;

    private tmpAfter: string;
    private tmpBefore: string;

    get limit(): number {
        return this._limit$.getValue();
    }

    set limit(value: number) {
        this._limit$.next(value);
    }

    get query(): string {
        return this._query$.getValue();
    }

    set query(value: string) {
        // reset current tracking variables when the subreddit query changes
        this.currentPage = 1;
        this.tmpBefore = '';
        this.tmpAfter = '';

        this._query$.next(value);
    }

    private _query$ = new BehaviorSubject('sweden');
    private _limit$ = new BehaviorSubject(10);
    private _after$ = new BehaviorSubject('');
    private _before$ = new BehaviorSubject('');

    private _posts$ = new BehaviorSubject([]);
    posts$ = this._posts$.asObservable();

    private _loading$ = new BehaviorSubject(false);
    loading$ = this._loading$.asObservable();

    private unsubscribe$ = new Subject();

    constructor(private http: HttpClient) {
        // if the sub query, limit or pagination changes, fetch new posts
        combineLatest([this._query$, this._limit$, this._after$, this._before$])
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(([query, limit, after, before]) => {
                this.fetchSubPosts(query, limit, after, before)
                    .then(posts => this._posts$.next(posts));
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    nextPage(): void {
        this.currentPage++;
        // reset to remove it from the final query
        this.tmpBefore = '';
        this._after$.next(this.tmpAfter);
    }

    prevPage(): void {
        if (this.currentPage === 1) {
            return;
        }
        this.currentPage--;
        // reset to remove it from the final query
        this.tmpAfter = '';
        this._before$.next(this.tmpBefore);
    }

    fetchSubPosts(subreddit: string, limit: number, after?: string, before?: string): Promise<any[]> {
        this._loading$.next(true);
        // format sub query
        if (!subreddit.startsWith('r/')) {
            subreddit = 'r/' + subreddit;
        }

        let limitParam = 'limit=' + limit;
        const afterParam = this.tmpAfter && after ? '&after=' + after : '';
        const beforeParam = this.tmpBefore && before ? '&before=' + before : '';

        if (afterParam.length || beforeParam.length) {
            limitParam += '&count=' + limit * this.currentPage;
        }

        return this.http.get<any>(REDDIT_API + subreddit + '.json?' + limitParam + afterParam + beforeParam)
                   .pipe(
                       tap(() => this._loading$.next(false)),
                       tap((res) => {
                           // store after and before values
                           this.tmpAfter = res.data.after;
                           this.tmpBefore = res.data.before;
                       }),
                       map(res => res.data.children),
                       catchError((err, caught) => {
                           this._loading$.next(false);
                           return of([]);
                       }))
                   .toPromise();
    }

    fetchPost(id: string): Observable<FormattedPost | null> {
        this._loading$.next(true);

        return this.http.get<PostDetails>(REDDIT_API + 'comments/' + id + '.json?')
                   .pipe(
                       tap(() => this._loading$.next(false)),
                       map(res => {
                           return {post: res[0].data.children[0].data, comments: res[1].data.children};
                       }),
                       catchError((err, caught) => {
                           this._loading$.next(false);
                           return of(null);
                       }));
    }
}
