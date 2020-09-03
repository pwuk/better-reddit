import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {

    id: string;

    private $unsubscribe = new Subject();


    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap
            .pipe(takeUntil(this.$unsubscribe))
            .subscribe(params => {
                this.id = params.get('id');
                // dispatch action to load the details here.
            });
    }

    ngOnDestroy(): void {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }

}
