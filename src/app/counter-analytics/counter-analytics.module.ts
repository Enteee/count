import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CounterAnalyticsPage } from './counter-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: CounterAnalyticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CounterAnalyticsPage]
})
export class CounterAnalyticsPageModule {}
