import { Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AppStateRepositoryService } from '../model/app-state-repository.service';

import { NotImplementedModalPage } from './not-implemented-modal.page';

export class NotImplemented  implements OnInit {

  @Input() issueId: number;
  @Input() description: string;
  @Input() on = 'click';

  modal: HTMLIonModalElement;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private modalController: ModalController,
    private appStateRepositoryService: AppStateRepositoryService,
  ) { }

  ngOnInit() {
    if (this.appStateRepositoryService.state.disableNotImplemented) {
      this.elementRef.nativeElement.style.display = 'none';
      return;
    }

    this.renderer.listen(
      this.elementRef.nativeElement,
      this.on,
      e => {
        this.presentModal();
      }
    );
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
