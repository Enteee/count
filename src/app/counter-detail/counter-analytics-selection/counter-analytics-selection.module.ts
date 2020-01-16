import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CounterRepositoryService } from '../../models/counter-repository.service';

import { CounterAnalyticsSelectionPage } from './counter-analytics-selection.page';

const routes: Routes = [
  {
    path: '',
    component: CounterAnalyticsSelectionPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CounterAnalyticsSelectionPage]
})
export class CounterAnalyticsSelectionPageModule {}
