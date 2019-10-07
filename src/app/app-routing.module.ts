import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppStateRepositoryService } from './models/app-state-repository.service';
import { CounterRepositoryService } from './models/counter-repository.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counters',
    pathMatch: 'full'
  },
  {
    path: 'counters',
    loadChildren: './counters/counters.module#CountersPageModule'
  },
  {
    path: 'counter-analytics/:id',
    resolve: {
      counter: CounterRepositoryService,
    },
    loadChildren: './counter-analytics/counter-analytics.module#CounterAnalyticsPageModule'
  },
  {
    path: 'counter-settings/:id',
    resolve: {
      counter: CounterRepositoryService,
    },
    loadChildren: './counter-settings/counter-settings.module#CounterSettingsPageModule'
  },
  {
    path: 'contribute',
    loadChildren: './contribute/contribute.module#ContributePageModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule',
    resolve: {
      appState: AppStateRepositoryService,
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
