import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppState } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

import { ContributorInfo } from '../contributors';
import { ContributorService } from '../services/contributor.service';


type TemplateType = 'bug' | 'feature';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss'],
})
export class ContributePage implements OnInit {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly PROJECT_NAME = 'Enteee/count';

  static readonly EMAIL_PREFIX = 'count-';
  static readonly EMAIL_DOMAIN = 'duckpond.ch';
  static readonly EMAIL_BODY_TEMPLATES = '/assets';

  static readonly TEMPLATE_BUG = 'bug_report.md';
  static readonly TEMPLATE_FEATURE = 'feature_request.md';

  appState: AppState;
  contributors: Array<ContributorInfo>;

  constructor(
    private httpClient: HttpClient,
    private iab: InAppBrowser,
    private emailComposer: EmailComposer,
    private appStateService: AppStateService,
    private contributorService: ContributorService,
  ) { }

  ngOnInit() {
    this.appState = this.appStateService.appState;
    this.contributors = this.contributorService.getDonatable();
  }

  private getTemplateName(
    templateType: TemplateType
  ): string {
    switch (templateType) {
      default:
      case 'bug':
        return ContributePage.TEMPLATE_BUG;
        break;
      case 'feature':
        return ContributePage.TEMPLATE_FEATURE;
        break;
    }
  }

  private async getEmailTemplate(
    templateType: TemplateType
  ) {
    const templateName = this.getTemplateName(templateType);
    const body = await this.httpClient.get(
      `${ContributePage.EMAIL_BODY_TEMPLATES}/${templateName}`,
      {
        responseType: 'text'
      }
    ).toPromise();

    return {
      to: `${ContributePage.EMAIL_PREFIX}${templateType}@${ContributePage.EMAIL_DOMAIN}`,
      subject: `[${templateType}]: `,
      body,
    };
  }

  openNewGithub(
    templateType: TemplateType
  ) {
    const templateName = this.getTemplateName(templateType);
    this.iab.create(
      `${ContributePage.GITHUB_URL}/${ContributePage.PROJECT_NAME}/issues/new?template=${templateName}`
    );
  }

  async openNewMail(
    templateType: TemplateType
  ) {
    this.emailComposer.open(
      await this.getEmailTemplate(templateType)
    );
  }

  openBrowser(url: string) {
    this.iab.create(url);
  }

}
