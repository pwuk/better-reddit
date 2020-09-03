import { Component, Input, OnInit } from '@angular/core';

export interface Post {
    id: string;
    title: string;
    author: string;
    thumbnail: string;
    permalink: string;
    created_utc: string;
    num_comments: number;
    score: number;
}

@Component({
    selector: 'app-post-overview',
    templateUrl: './post-overview.component.html',
    styleUrls: ['./post-overview.component.scss'],
})
export class PostOverviewComponent implements OnInit {

    @Input() post: Post;

    constructor() { }

    ngOnInit(): void {
    }

}
