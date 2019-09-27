import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CountersService } from './counters.service';

import { NotImplementedModule } from './not-implemented/not-implemented.module';

export function initializeCounters(countersService: CountersService) {
  return async () => {
    await countersService.init();
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    NotImplementedModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountersService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeCounters,
      deps: [CountersService],
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
