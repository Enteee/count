import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgApexchartsModule } from 'ng-apexcharts';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { PlusMinusTotalsPieChartComponent } from './plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component';
import { PlusMinusCounterComponent } from './plus-minus-counter/plus-minus-counter.component';

import { DayOfWeekHistogramComponent } from './day-of-week-histogram/day-of-week-histogram.component';
import { DayOfMonthHistogramComponent } from './day-of-month-histogram/day-of-month-histogram.component';
import { HourOfDayRadarComponent } from './hour-of-day-radar/hour-of-day-radar.component';

import { YearHeatmapComponent } from './year-heatmap/year-heatmap.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    NgApexchartsModule,
    NotImplementedModule,
  ],
  declarations: [
    PlusMinusTotalsPieChartComponent,
    PlusMinusCounterComponent,
    DayOfWeekHistogramComponent,
    DayOfMonthHistogramComponent,
    HourOfDayRadarComponent,
    YearHeatmapComponent,
  ],
  exports: [
    PlusMinusCounterComponent,
  ],
  entryComponents: [
    PlusMinusTotalsPieChartComponent,
    DayOfWeekHistogramComponent,
    DayOfMonthHistogramComponent,
    HourOfDayRadarComponent,
    YearHeatmapComponent,
  ],
  providers: [
  ]
})
export class ComponentsModule { }
