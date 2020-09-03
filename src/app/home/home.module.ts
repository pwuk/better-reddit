import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { DateAgoPipe } from '../shared/pipes/date-ago.pipe';


@NgModule({
    declarations: [
        HomeComponent,
        PostOverviewComponent,
        DateAgoPipe,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
})
export class HomeModule {
}
