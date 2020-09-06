import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostService } from '../shared/services/post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

    constructor(public postService: PostService) {
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
