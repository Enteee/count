import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

type TemplateType = 'bug' | 'feature';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss'],
})
export class ContributePage {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly PROJECT_NAME = 'Enteee/count';

  static readonly EMAIL_PREFIX = 'count-';
  static readonly EMAIL_DOMAIN = 'duckpond.ch';
  static readonly EMAIL_BODY_TEMPLATES = '/assets/email-templates/';

  static readonly TEMPLATE_BUG = 'bug_report.md';
  static readonly TEMPLATE_FEATURE = 'feature_request.md';

  static readonly LIBREPAY_URL= 'https://liberapay.com';
  static readonly LIBREPAY_USER = 'Ente';

  constructor(
    private httpClient: HttpClient,
    private iab: InAppBrowser,
    private emailComposer: EmailComposer,
  ) {
  }

  private getTemplateName(
    templateType: TemplateType
  ): string {
    switch (templateType){
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
  ){
    let templateName = this.getTemplateName(templateType);
    let body = await this.httpClient.get(
      `${ContributePage.EMAIL_BODY_TEMPLATES}/${templateName}`,
      {
        responseType: 'text'
      }
    ).toPromise();

    return {
      to: `${ContributePage.EMAIL_PREFIX}${templateType}@${ContributePage.EMAIL_DOMAIN}`,
      subject: `[${templateType}]: `,
      body: body,
    }
  }

  async openNewGithub(
    templateType: TemplateType
  ) {
    let templateName = this.getTemplateName(templateType);
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

  async openDonate(){
    this.iab.create(
      `${ContributePage.LIBREPAY_URL}/${ContributePage.LIBREPAY_USER}`
    );
  }

}
