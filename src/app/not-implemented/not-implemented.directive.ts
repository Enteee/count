import { Directive } from '@angular/core';

import { NotImplemented } from './not-implemented';

@Directive({
  selector: '[appNotImplemented]',
})
export class NotImplementedDirective extends NotImplemented {
}
