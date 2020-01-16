import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppStateRepositoryService } from './models/app-state-repository.service';
import { CounterRepositoryService } from './models/counter-repository.service';
import { AnalyticsItemRepositoryService } from './models/analytics-item-repository.service';

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
    path: 'counter-detail/:counter-id',
    resolve: {
      counter: CounterRepositoryService,
    },
    loadChildren: './counter-detail/counter-detail.module#CounterDetailPageModule'
  },
  {
    path: 'counter-analytics/:analyticsitem-id/:counter-id',
    resolve: {
      analyticsItem: AnalyticsItemRepositoryService,
      counter: CounterRepositoryService,
    },
    loadChildren: './counter-analytics/counter-analytics.module#CounterAnalyticsPageModule'
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
  },
  {
    path: 'help',
    loadChildren: './help/help.module#HelpPageModule'
  },
  {
    path: 'fullscreen-counter/:type/:counter-id',
    loadChildren: './fullscreen-counter/fullscreen-counter.module#FullscreenCounterPageModule',
    resolve: {
      counter: CounterRepositoryService,
    },
  },
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
