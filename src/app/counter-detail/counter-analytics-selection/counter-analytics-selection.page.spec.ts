import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsItemService } from '../../services/analytics-item.service';
import { CounterAnalyticsSelectionPage } from './counter-analytics-selection.page';
import { Counter } from '../../models/counter';
import { ActivatedRoute } from '@angular/router';

describe('CounterAnalyticsSelectionPage', () => {
  let component: CounterAnalyticsSelectionPage;
  let fixture: ComponentFixture<CounterAnalyticsSelectionPage>;

  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let analyticsItemService: AnalyticsItemService;

  beforeEach(async(() => {
    counter = new Counter();
    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
      },
    } as any;

    analyticsItemService = new AnalyticsItemService(
      {} as any
    );

    TestBed.configureTestingModule({
      declarations: [ CounterAnalyticsSelectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: AnalyticsItemService, useValue: AnalyticsItemService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAnalyticsSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
