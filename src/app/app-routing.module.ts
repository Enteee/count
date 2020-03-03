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
    loadChildren: () => import('./counters/counters.module').then(m => m.CountersPageModule)
  },
  {
    path: 'counter-detail/:counter-id',
    resolve: {
      counter: CounterRepositoryService,
    },
    loadChildren: () => import('./counter-detail/counter-detail.module').then(m => m.CounterDetailPageModule)
  },
  {
    path: 'counter-analytics/:analyticsitem-id/:counter-id',
    resolve: {
      analyticsItem: AnalyticsItemRepositoryService,
      counter: CounterRepositoryService,
    },
    loadChildren: () => import('./counter-analytics/counter-analytics.module').then(m => m.CounterAnalyticsPageModule)
  },
  {
    path: 'contribute',
    loadChildren: () => import('./contribute/contribute.module').then(m => m.ContributePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    resolve: {
      appState: AppStateRepositoryService,
    },
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'fullscreen-counter/:type/:counter-id',
    loadChildren: () => import('./fullscreen-counter/fullscreen-counter.module').then(m => m.FullscreenCounterPageModule),
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
