import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppStateRepositoryService } from './model/app-state-repository.service';
import { CounterRepositoryService } from './model/counter-repository.service';

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
