import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Deploy } from 'cordova-plugin-ionic/dist/ngx';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Deploy
  ],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
      ]
    };
  }
}
