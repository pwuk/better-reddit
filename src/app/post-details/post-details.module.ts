import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsComponent } from './post-details.component';
import { SharedModule } from '../shared/modules/shared.module';
import { PostCommentComponent } from './post-comment/post-comment.component';


@NgModule({
    declarations: [
        PostDetailsComponent,
        PostCommentComponent
    ],
    imports: [
        CommonModule,
        PostDetailsRoutingModule,
        SharedModule,
    ],
})
export class PostDetailsModule {
}
