import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CounterService } from './model/counter.service';

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
      counter: CounterService,
    },
    loadChildren: './counter-settings/counter-settings.module#CounterSettingsPageModule'
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
