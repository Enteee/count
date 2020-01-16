import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';
import { ComponentsModule } from '../components/components.module';

import { CounterAnalyticsPage } from './counter-analytics.page';
import { CounterAnalyticsDirective } from './counter-analytics.directive';

const routes: Routes = [
  {
    path: '',
    component: CounterAnalyticsPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NotImplementedModule,
    ComponentsModule,
  ],
  declarations: [CounterAnalyticsPage, CounterAnalyticsDirective]
})
export class CounterAnalyticsPageModule {}
