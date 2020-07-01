import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { AppStateRepositoryService } from '../models/app-state-repository.service';
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
          { path: '', redirectTo: 'analytics', pathMatch: 'full', },
          {
            path: 'analytics',
            loadChildren: () => import(
              './counter-analytics-selection/counter-analytics-selection.module'
            ).then(
              m => m.CounterAnalyticsSelectionPageModule
            ),
          },
          {
            path: 'count',
            loadChildren: () => import(
              './counter-count/counter-count.module'
            ).then(
              m => m.CounterCountPageModule
            ),
            resolve: {
              appState: AppStateRepositoryService,
            },
          },
          {
            path: 'settings',
            loadChildren: () => import(
              './counter-settings/counter-settings.module'
            ).then(
              m => m.CounterSettingsPageModule
            ),
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
