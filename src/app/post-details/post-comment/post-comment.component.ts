import { Component, Input } from '@angular/core';
import { PostChild } from '../../shared/services/PostDetails';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { urlify } from '../../utils';

@Component({
    selector: 'app-post-comment',
    templateUrl: './post-comment.component.html',
    styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent {

    @Input() comment: PostChild;
    @Input() count: number;

    constructor(private sanitizer: DomSanitizer) { }

    getFormattedSelfText(text): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(urlify(text));
    }
}
