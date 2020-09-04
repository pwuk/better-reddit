import { Component } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    public masonryOptions: NgxMasonryOptions = {
        gutter: 10,
        resize: true,
        fitWidth: true,
    };

    constructor(public postService: PostService) {
    }

    prevPage(): void {
        this.postService.prevPage();
    }

    nextPage(): void {
        this.postService.nextPage();
    }
}
