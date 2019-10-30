import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Deploy,
    Geolocation,
  ],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
    };
  }
}
