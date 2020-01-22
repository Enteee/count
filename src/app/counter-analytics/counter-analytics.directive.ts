import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCounterAnalytics]'
})
export class CounterAnalyticsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
