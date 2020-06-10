import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppState } from '../models/app-state';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-not-implemented-modal',
  templateUrl: './not-implemented-modal.page.html',
  styleUrls: ['./not-implemented-modal.page.scss'],
})
export class NotImplementedModalPage {

  static readonly GITHUB_URL = 'https://github.com';
  static readonly ISSUEHUNT_URL = 'https://issuehunt.io';
  static readonly PROJECT_NAME = 'Enteee/count';

  @Input() issueId: number;
  @Input() description: string;

  appState: AppState;

  constructor(
    private modalController: ModalController,
    private iab: InAppBrowser,
    private appStateService: AppStateService,
  ) {
    this.appState = this.appStateService.appState;
  }

  public async dismissModal() {
    this.modalController.dismiss();
  }

  public openIssueOnGithub() {
    this.iab.create(
      `${NotImplementedModalPage.GITHUB_URL}/${NotImplementedModalPage.PROJECT_NAME}/issues/${this.issueId}`
    );
  }

  public openIssueOnIssueHunt() {
    this.iab.create(
      `${NotImplementedModalPage.ISSUEHUNT_URL}/r/${NotImplementedModalPage.PROJECT_NAME}/issues/${this.issueId}`
    );
  }

  public async disableNotImplemented() {
    await this.appStateService.setDisableNotImplemented(true);
    this.modalController.dismiss();
  }
}
