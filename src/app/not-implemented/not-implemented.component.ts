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

  /**
   * This contructor is here because the base class (NotImplemented)
   * does not have a @Directive / @Component annotation, which is required
   * for dependency injection as of angular 9.
   * For this reason we provide here our own dummy constructor which
   * just calls super()
   */
  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    modalController: ModalController,
    appStateRepositoryService: AppStateRepositoryService,
  ) {
    super(renderer, elementRef, modalController, appStateRepositoryService);
  }
}
