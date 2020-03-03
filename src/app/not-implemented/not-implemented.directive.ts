import { Renderer2, ElementRef, Directive } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplemented } from './not-implemented';

@Directive({
  selector: '[appNotImplemented]',
})
export class NotImplementedDirective extends NotImplemented {
  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    modalController: ModalController,
    appStateRepositoryService: AppStateRepositoryService,
  ) {
    super(renderer, elementRef, modalController, appStateRepositoryService);
  }
}
