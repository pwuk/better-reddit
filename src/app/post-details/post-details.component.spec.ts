import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PostDetailsComponent } from './post-details.component';
import { mockPost } from '../test/MockPost';
import { PostService } from '../shared/services/post.service';
import { PostServiceMock } from '../test/post.service.mock';
import { DateAgoPipe } from '../shared/pipes/date-ago.pipe';

describe('PostDetailsComponent', () => {
    let component: PostDetailsComponent;
    let fixture: ComponentFixture<PostDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostDetailsComponent, DateAgoPipe],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({get: (key) => mockPost.id}),
                    },
                },
                {provide: PostService, useClass: PostServiceMock}],
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
