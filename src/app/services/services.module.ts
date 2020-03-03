import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Deploy,
    Geolocation,
    Vibration,
  ],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
    };
  }
}
