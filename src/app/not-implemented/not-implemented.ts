import { Input, OnInit, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AppStateRepositoryService } from '../model/app-state-repository.service';

import { NotImplementedModalPage } from './not-implemented-modal.page';

export class NotImplemented  implements OnInit {

  @Input() issueId: number;
  @Input() description: string;

  modal: HTMLIonModalElement;

  constructor(
    private modalController: ModalController,
    protected elementRef: ElementRef,
    private appStateRepositoryService: AppStateRepositoryService,
  ) { }

  ngOnInit() {
    if(this.appStateRepositoryService.state.disableNotImplemented){
      this.elementRef.nativeElement.style.display = 'none';
      return
    }
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
