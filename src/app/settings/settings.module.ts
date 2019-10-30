import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, AlertController } from '@ionic/angular';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
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
  providers: [
    AlertController,
  ],
  declarations: [
    SettingsPage
  ],
})
export class SettingsPageModule {}
