import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NotImplemented } from './not-implemented';

@Directive({
  selector: '[appNotImplemented]',
})
export class NotImplementedDirective extends NotImplemented implements OnInit {

  @Input() public on = 'click';

  constructor(public modalController: ModalController, private renderer: Renderer2, private elementRef: ElementRef) {
    super(modalController);
  }

  ngOnInit() {
    this.renderer.listen(
      this.elementRef.nativeElement,
      this.on,
      e => {
        this.presentModal();
      }
    );
  }

}
