import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NotImplemented } from './not-implemented';

import { AppStateRepositoryService } from '../model/app-state-repository.service';

@Directive({
  selector: '[appNotImplemented]',
})
export class NotImplementedDirective extends NotImplemented implements OnInit {

  @Input() public on = 'click';

  constructor(
    private renderer: Renderer2,
    modalController: ModalController,
    elementRef: ElementRef,
    appStateRepositoryService: AppStateRepositoryService,
  ) {
    super(
      modalController,
      elementRef,
      appStateRepositoryService,
    );
  }

  ngOnInit() {
    super.ngOnInit();

    this.renderer.listen(
      this.elementRef.nativeElement,
      this.on,
      e => {
        this.presentModal();
      }
    );
  }

}
