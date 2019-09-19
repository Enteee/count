import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-not-implemented-modal',
  templateUrl: './not-implemented-modal.page.html',
  styleUrls: ['./not-implemented-modal.page.scss'],
})
export class NotImplementedModalPage {

  @Input() issueId: number;
  @Input() description: string;

  constructor(public modalController: ModalController) {

  }

  async dismissModal() {
    this.modalController.dismiss();
  }

}
