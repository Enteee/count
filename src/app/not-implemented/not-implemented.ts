import { Input, OnInit, DoCheck, Renderer2, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplementedModalPage } from './not-implemented-modal.page';

export class NotImplemented  implements OnInit, DoCheck {

  @Input() issueId: number;
  @Input() description: string;
  @Input() on = 'click';
  @Input() alwaysDisplay = false;

  private modal: HTMLIonModalElement;
  private appState: AppState;
  private styleDisplay: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private modalController: ModalController,
    private appStateRepositoryService: AppStateRepositoryService,
  ) {
    this.styleDisplay = this.elementRef.nativeElement.style.display;
    this.appState = this.appStateRepositoryService.state;
  }

  ngOnInit() {
    this.renderer.listen(
      this.elementRef.nativeElement,
      this.on,
      (e) => this.onEvent(e),
    );
  }

  ngDoCheck(): void {
    // Hide this element if the user has chosen to hide not implemented features
    if (!this.alwaysDisplay) {

      this.elementRef.nativeElement.style.display = (this.appState.disableNotImplemented) ? 'none' : this.styleDisplay;
    }
  }

  onEvent(event: Event) {
    if (!this.appState.disableNotImplemented) {
      this.presentModal();
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

    await this.modal.present();
  }
}
