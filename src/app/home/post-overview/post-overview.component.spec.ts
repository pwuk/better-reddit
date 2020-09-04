import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  PostOverviewComponent } from './post-overview.component';
import { DateAgoPipe } from '../../shared/pipes/date-ago.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockPost } from '../../test/MockPost';

describe('PostOverviewComponent', () => {
    let component: PostOverviewComponent;
    let fixture: ComponentFixture<PostOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostOverviewComponent, DateAgoPipe],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostOverviewComponent);
        component = fixture.componentInstance;
        component.post = mockPost;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
