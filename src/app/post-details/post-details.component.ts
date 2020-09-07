import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { PostService } from '../shared/services/post.service';
import { FormattedPost } from './PostDetails';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { urlify } from '../utils';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent implements OnInit, OnDestroy {

    id: string;
    postDetails$: Observable<FormattedPost>;

    private $unsubscribe = new Subject();

    constructor(private title: Title, private route: ActivatedRoute, private sanitizer: DomSanitizer, public postService: PostService) { }

    ngOnInit(): void {
        this.route.paramMap
            .pipe(takeUntil(this.$unsubscribe))
            .subscribe(params => {
                this.id = params.get('id');
                // dispatch action to load the details here.
                this.postDetails$ = this.postService.fetchPost(this.id)
                                        .pipe(tap(details => this.title.setTitle(details.post.title + ' | BetterReddit')));
            });
    }

    ngOnDestroy(): void {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }

    getFormattedSelfText(text): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(urlify(text));
    }
}
