import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CountersPage } from './counters.page';
import { CountersSettingsComponent } from './counters-settings/counters-settings.component';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotImplementedModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountersPage
      }
    ])
  ],
  declarations: [
    CountersPage,
    CountersSettingsComponent,
  ],
  providers: [],
  entryComponents: [
    CountersSettingsComponent
  ]
})
export class CountersPageModule {}
