import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotImplementedModule } from '../../not-implemented/not-implemented.module';
import { ComponentsModule } from '../../components/components.module';

import { CounterCountPage } from './counter-count.page';


const routes: Routes = [
  {
    path: '',
    component: CounterCountPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NotImplementedModule,
  ],
  declarations: [CounterCountPage]
})
export class CounterCountPageModule {}
