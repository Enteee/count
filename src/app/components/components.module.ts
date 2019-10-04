import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PlusMinusCounterComponent } from './plus-minus-counter/plus-minus-counter.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  declarations: [
    PlusMinusCounterComponent,
  ],
  exports: [
    PlusMinusCounterComponent
  ]
})
export class ComponentsModule { }
