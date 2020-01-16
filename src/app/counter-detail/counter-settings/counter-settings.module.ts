import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotImplementedModule } from '../../not-implemented/not-implemented.module';

import { CounterSettingsPage } from './counter-settings.page';

const routes: Routes = [
  {
    path: '',
    component: CounterSettingsPage
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
  declarations: [CounterSettingsPage]
})
export class CounterSettingsPageModule {}
