import { Component, OnInit } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly PROJECT_NAME = 'Enteee/count';

  deployConfiguration: Promise<object>;

  constructor(
    private deploy: Deploy,
    private iab: InAppBrowser,
  ) { }

  ngOnInit() {
    this.deployConfiguration = this.deploy.getConfiguration();
  }

  openGithubHelp(){
    this.iab.create(
      `${HelpPage.GITHUB_URL}/${HelpPage.PROJECT_NAME}/wiki`
    );
  }

}
