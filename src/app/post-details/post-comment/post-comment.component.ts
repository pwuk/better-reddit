import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostComment } from '../PostDetails';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { urlify } from '../../utils';

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

    constructor(private sanitizer: DomSanitizer) { }

    getFormattedSelfText(text): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(urlify(text));
    }

    toggleReplies(): void {
        this.showReplies = !this.showReplies;
    }
}
