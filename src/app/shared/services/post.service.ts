import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';

const REDDIT_API = 'https://www.reddit.com/';

@Injectable({
    providedIn: 'root',
})
export class PostService implements OnDestroy {
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
        this._query$.next(value);
    }

    private _query$ = new BehaviorSubject('sweden');
    private _limit$ = new BehaviorSubject(10);
    private _after$ = new BehaviorSubject('');
    private _before$ = new BehaviorSubject('');

    currentPage = 1;

    private _posts$ = new BehaviorSubject([]);
    posts$ = this._posts$.asObservable();

    private _loading$ = new BehaviorSubject(false);
    loading$ = this._loading$.asObservable();

    private unsubscribe$ = new Subject();

    constructor(private http: HttpClient) {

        // if our query OR limit changes, fetch new posts
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
        if (this.currentPage === 0) {
            return;
        }
        this.currentPage--;

        // reset to remove it from the final query
        this.tmpAfter = '';
        this._before$.next(this.tmpBefore);
    }

    fetchSubPosts(subreddit: string, limit: number, after?: string, before?: string): Promise<any> {
        this._loading$.next(true);
        // format sub query
        if (!subreddit.startsWith('r/')) {
            subreddit = 'r/' + subreddit;
        }
        const limitParam = 'limit=' + limit + '&count=' + limit;
        const afterParam = after ? '&after=' + after : '';
        const beforeParam = before ? '&before=' + before : '';

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
                           return [];
                       }))
                   .toPromise();
    }
}
