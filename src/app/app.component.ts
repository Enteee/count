import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Counters',
      icon: 'infinite',
      url: '/counters'
    },
    {
      title: 'Fuel: 1231',
      icon: 'cash'
    },
    {
      title: 'Report Issue',
      icon: 'bug',
    },
    {
      title: 'Counter to Home Screen',
      icon: 'phone-portrait',
    },
    {
      title: 'Help',
      icon: 'help',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
