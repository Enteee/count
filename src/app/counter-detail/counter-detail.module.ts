import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { CounterRepositoryService } from '../models/counter-repository.service';
import { CounterDetailPage } from './counter-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CounterDetailPage,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'settings', pathMatch: 'full', },
          {
            path: 'count',
            loadChildren: './counter-count/counter-count.module#CounterCountPageModule',
          },
          {
            path: 'settings',
            loadChildren: './counter-settings/counter-settings.module#CounterSettingsPageModule',
          },
          {
            path: 'analytics',
            loadChildren: './counter-analytics-selection/counter-analytics-selection.module#CounterAnalyticsSelectionPageModule'
          },
        ],
      }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NotImplementedModule,
  ],
  declarations: [CounterDetailPage]
})
export class CounterDetailPageModule {}
