import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    constructor(public postService: PostService) {
    }

    ngOnInit(): void {
    }

    prevPage(): void {
        this.postService.prevPage();

    }

    nextPage(): void {
        this.postService.nextPage();
    }

}
