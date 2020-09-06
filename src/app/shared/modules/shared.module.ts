import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { SpinnerComponent } from '../components/spinner/spinner.component';


@NgModule({
    declarations: [
        DateAgoPipe,
        SpinnerComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [CommonModule, DateAgoPipe, SpinnerComponent],
})
export class SharedModule {
}
