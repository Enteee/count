import { Component, OnInit } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { ContributorInfo } from '../contributors';
import { ContributorService } from '../services/contributor.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly PROJECT_NAME = 'Enteee/count';

  deployConfiguration: Promise<object>;
  contributors: Array<ContributorInfo>;

  constructor(
    private deploy: Deploy,
    private iab: InAppBrowser,
    private contributorService: ContributorService,
  ) { }

  ngOnInit() {
    this.deployConfiguration = this.deploy.getConfiguration();
    this.contributors = this.contributorService.all;
  }

  openGithubHelp() {
    this.iab.create(
      `${HelpPage.GITHUB_URL}/${HelpPage.PROJECT_NAME}/wiki`
    );
  }

  openBrowser(
    url: string = `${HelpPage.GITHUB_URL}/${HelpPage.PROJECT_NAME}/contributors`
  ) {
    this.iab.create(url);
  }

}
