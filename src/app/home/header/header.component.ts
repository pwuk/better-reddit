import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, takeUntil } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';
import { PostService } from '../../shared/services/post.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

    subreddit = new FormControl('');
    limit = new FormControl(this.postService.limit);

    private unsubscribe$ = new Subject();

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.subreddit.valueChanges
            .pipe(
                debounce(ev => interval(500)),
                takeUntil(this.unsubscribe$),
            )
            .subscribe(val => {
                this.postService.query = encodeURIComponent(val.trim());
            });

        this.limit.valueChanges
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(val => {
                console.log(val);
                this.postService.limit = val;
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
