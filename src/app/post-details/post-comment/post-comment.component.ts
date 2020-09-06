import { Component, Input } from '@angular/core';
import { PostChild, PostComment } from '../../shared/services/PostDetails';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { urlify } from '../../utils';

@Component({
    selector: 'app-post-comment',
    templateUrl: './post-comment.component.html',
    styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent {

    @Input() comment: PostComment;
    @Input() count?: number;

    constructor(private sanitizer: DomSanitizer) { }

    getFormattedSelfText(text): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(urlify(text));
    }
}
