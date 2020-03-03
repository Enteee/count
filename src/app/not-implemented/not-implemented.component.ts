import { Renderer2, ElementRef, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplemented } from './not-implemented';

@Component({
  selector: 'app-not-implemented',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.scss'],
})
export class NotImplementedComponent extends NotImplemented {
  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    modalController: ModalController,
    appStateRepositoryService: AppStateRepositoryService,
  ) {
    super(renderer, elementRef, modalController, appStateRepositoryService);
  }
}
