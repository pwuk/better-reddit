import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PostDetailsComponent } from './post-details.component';
import { mockPost } from '../test/MockPost';

describe('PostDetailsComponent', () => {
    let component: PostDetailsComponent;
    let fixture: ComponentFixture<PostDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostDetailsComponent],
            providers: [{
                provide: ActivatedRoute,
                useValue: {
                    paramMap: of({get: (key) => mockPost.id}),
                },
            }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
