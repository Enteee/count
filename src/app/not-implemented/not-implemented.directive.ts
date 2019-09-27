import { Directive } from '@angular/core';

import { NotImplemented } from './not-implemented'

@Directive({
  selector: '[appNotImplemented]',
  host: {
    '(click)': 'presentModal()',
    '(ionSwipe)': 'presentModal()',
  }
})
export class NotImplementedDirective extends NotImplemented {

}
