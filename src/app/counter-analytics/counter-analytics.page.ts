import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Counter } from '../models/counter';
import { AnalyticsItem } from '../models/analytics-item';
import { CounterAnalyticsDirective } from './counter-analytics.directive';
import { AnalyticsComponent } from '../components/analytics-component';

@Component({
  selector: 'app-counter-analytics',
  templateUrl: './counter-analytics.page.html',
  styleUrls: ['./counter-analytics.page.scss'],
})
export class CounterAnalyticsPage implements OnInit {

  @ViewChild(CounterAnalyticsDirective, {static: true}) counterAnalyticsHost: CounterAnalyticsDirective;

  counter: Counter;
  analyticsItem: AnalyticsItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
    this.analyticsItem = this.route.snapshot.data.analyticsItem;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.analyticsItem.component);
    const viewContainerRef = this.counterAnalyticsHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);

    const analyticsComponent = (componentRef.instance as AnalyticsComponent);
    analyticsComponent.counter = this.counter;
  }
}
