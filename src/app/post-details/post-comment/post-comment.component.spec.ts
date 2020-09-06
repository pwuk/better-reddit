import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentComponent } from './post-comment.component';
import { DateAgoPipe } from '../../shared/pipes/date-ago.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { mockDetailsResponse } from '../../test/post.service.mock';

describe('PostCommentComponent', () => {
    let component: PostCommentComponent;
    let fixture: ComponentFixture<PostCommentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostCommentComponent, DateAgoPipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostCommentComponent);
        component = fixture.componentInstance;
        component.comment = mockDetailsResponse.comments[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
