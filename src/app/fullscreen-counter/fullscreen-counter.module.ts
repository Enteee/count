import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LongPressModule } from 'ionic-long-press';

import { IonicModule } from '@ionic/angular';

import { FullscreenCounterPage } from './fullscreen-counter.page';

const routes: Routes = [
  {
    path: '',
    component: FullscreenCounterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongPressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullscreenCounterPage]
})
export class FullscreenCounterPageModule {}
