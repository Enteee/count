import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayOfWeekHistogramPage } from './day-of-week-histogram.page.component';

const routes: Routes = [
  {
    path: '',
    component: DayOfWeekHistogramPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayOfWeekHistogramPage]
})
export class DayOfWeekHistogramPageModule {}
