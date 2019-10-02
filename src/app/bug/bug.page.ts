import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.page.html',
  styleUrls: ['./bug.page.scss'],
})
export class BugPage implements OnInit {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly PROJECT_NAME = 'Enteee/count';
  static readonly TEMPLATE_ARGS = 'template=bug_report.md';
  static readonly EMAIL_BODY = '/assets/email-templates/bug_report.md';
  static readonly EMAIL = {
    to: 'count-bug@duckpond.ch',
    subject: 'New Issue',
    body: `Please try to be as specific as possible.`
  };

  private email = BugPage.EMAIL;

  constructor(
    private httpClient: HttpClient,
    private iab: InAppBrowser,
    private emailComposer: EmailComposer,
  ) {
  }

  ngOnInit() {
    this.httpClient.get(
      BugPage.EMAIL_BODY,
      {
        responseType: 'text'
      }
    ).subscribe(
      body => {
        this.email = {
          ...BugPage.EMAIL,
          ...{
            body,
          }
        };
      }
    );
  }

  openNewIssue() {
    this.iab.create(
      `${BugPage.GITHUB_URL}/${BugPage.PROJECT_NAME}/issues/new?${BugPage.TEMPLATE_ARGS}`
    );
  }

  async openNewIssueViaMail() {
    this.emailComposer.open(this.email);
  }

}
