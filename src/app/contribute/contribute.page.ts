import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss'],
})
export class ContributePage implements OnInit {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly PROJECT_NAME = 'Enteee/count';
  static readonly TEMPLATE_ARGS = 'template=bug_report.md';
  static readonly EMAIL_BODY = '/assets/email-templates/bug_report.md';
  static readonly EMAIL = {
    to: 'count-bug@duckpond.ch',
    subject: 'New Issue',
    body: `Please try to be as specific as possible.`
  };

  private email = ContributePage.EMAIL;

  constructor(
    private httpClient: HttpClient,
    private iab: InAppBrowser,
    private emailComposer: EmailComposer,
  ) {
  }

  ngOnInit() {
    this.httpClient.get(
      ContributePage.EMAIL_BODY,
      {
        responseType: 'text'
      }
    ).subscribe(
      body => {
        this.email = {
          ...ContributePage.EMAIL,
          ...{
            body,
          }
        };
      }
    );
  }

  openNewIssue() {
    this.iab.create(
      `${ContributePage.GITHUB_URL}/${ContributePage.PROJECT_NAME}/issues/new?${ContributePage.TEMPLATE_ARGS}`
    );
  }

  async openNewIssueViaMail() {
    this.emailComposer.open(this.email);
  }

}
