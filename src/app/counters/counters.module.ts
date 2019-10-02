import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CountersPage } from './counters.page';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotImplementedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountersPage
      }
    ])
  ],
  declarations: [
    CountersPage
  ],
  providers: []
})
export class CountersPageModule {}
