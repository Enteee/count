import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NotImplementedModule } from '../not-implemented/not-implemented.module';

import { PlusMinusCounterComponent } from './plus-minus-counter/plus-minus-counter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    NotImplementedModule,
  ],
  declarations: [
    PlusMinusCounterComponent,
  ],
  exports: [
    PlusMinusCounterComponent
  ]
})
export class ComponentsModule { }