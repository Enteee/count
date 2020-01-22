import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule, Input, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Counter } from '../models/counter';
import { AnalyticsItem } from '../models/analytics-item';

import { CounterAnalyticsDirective } from './counter-analytics.directive';
import { CounterAnalyticsPage } from './counter-analytics.page';

@Component({
  selector: 'test',
  template: 'template',
})
class MockTestComponent {
  @Input() counter: Counter;
}

describe('CounterAnalyticsPage', () => {
  let component: CounterAnalyticsPage;
  let fixture: ComponentFixture<CounterAnalyticsPage>;
  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let analyticsItem: AnalyticsItem;

  beforeEach(async(() => {
    counter = new Counter();
    analyticsItem = new AnalyticsItem(MockTestComponent, {} as any);

    activatedRoute = {
      snapshot: {
        data: {
          counter,
          analyticsItem,
        },
      },
    } as any;

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        CounterAnalyticsPage,
        CounterAnalyticsDirective,
        MockTestComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    });
    // https://github.com/angular/angular/issues/10760#issuecomment-250522300
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ MockTestComponent ],
      },
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
