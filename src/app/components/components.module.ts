import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgApexchartsModule } from 'ng-apexcharts';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { PlusMinusCounterComponent } from './plus-minus-counter/plus-minus-counter.component';

import { DayOfWeekHistogramComponent } from './day-of-week-histogram/day-of-week-histogram.component';
import { DayOfWeekHistogramApexComponent } from './day-of-week-histogram-apex/day-of-week-histogram-apex.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    NgApexchartsModule,
    NotImplementedModule,
  ],
  declarations: [
    PlusMinusCounterComponent,
    DayOfWeekHistogramComponent,
    DayOfWeekHistogramApexComponent,
  ],
  exports: [
    PlusMinusCounterComponent,
  ],
  entryComponents: [
    DayOfWeekHistogramComponent,
    DayOfWeekHistogramApexComponent,
  ],
  providers: [
  ]
})
export class ComponentsModule { }
