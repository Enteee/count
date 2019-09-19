import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotImplementedComponent } from './not-implemented.component';
import { NotImplementedModalPage } from './not-implemented-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    NotImplementedComponent,
    NotImplementedModalPage,
  ],
  entryComponents: [
    NotImplementedModalPage,
  ],
  exports: [
    NotImplementedComponent,
  ]
})
export class NotImplementedModule {}
