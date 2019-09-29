import { Directive, HostListener } from '@angular/core';

import { NotImplemented } from './not-implemented';

@Directive({
  selector: '[appNotImplemented]',
})
export class NotImplementedDirective extends NotImplemented {

  @HostListener('click')
  @HostListener('ionSwipe')
  async presentModal() {
    super.presentModal();
  }

}
