import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

    constructor(private title: Title, public postService: PostService) {
    }

    ngOnInit(): void {
        this.title.setTitle('Discover Great Subs | BetterReddit');
    }

    prevPage(): void {
        this.postService.prevPage();
    }

    nextPage(): void {
        this.postService.nextPage();
    }

    trackById(index, item): string {
        return item.id;
    }
}
