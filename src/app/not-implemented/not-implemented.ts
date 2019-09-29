import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotImplementedModalPage } from './not-implemented-modal.page';

export class NotImplemented {

  @Input() issueId: number;
  @Input() description: string;

  modal: HTMLIonModalElement;

  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    this.modal = await this.modalController.create({
      component: NotImplementedModalPage,
      componentProps: {
        issueId: this.issueId,
        description: this.description,
      }
    });
    return await this.modal.present();
  }

}
