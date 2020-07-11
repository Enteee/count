import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Count',
      icon: 'add-circle',
      url: '/counters'
    },
    {
      title: 'Contribute',
      icon: 'heart',
      url: '/contribute',
    },
    {
      title: 'Help',
      icon: 'help-circle',
      url: '/help',
    },
    {
      title: 'Settings',
      icon: 'settings',
      url: '/settings',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appStateService: AppStateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.appStateService.update();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
