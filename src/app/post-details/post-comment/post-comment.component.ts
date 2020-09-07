import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostComment } from '../PostDetails';

@Component({
    selector: 'app-post-comment',
    templateUrl: './post-comment.component.html',
    styleUrls: ['./post-comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCommentComponent {

    @Input() comment: PostComment;
    @Input() count?: number;

    showReplies = true;

    constructor() { }

    toggleReplies(): void {
        this.showReplies = !this.showReplies;
    }

    trackById(index, item): string {
        return item.id;
    }
}
