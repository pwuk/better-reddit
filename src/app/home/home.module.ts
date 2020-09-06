import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { SharedModule } from '../shared/modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HomeComponent,
        PostOverviewComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class HomeModule {
}
