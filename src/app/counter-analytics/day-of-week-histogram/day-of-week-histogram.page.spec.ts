import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfWeekHistogramPage } from './day-of-week-histogram.page';
import { Counter } from '../../models/counter';
import { ActivatedRoute } from '@angular/router';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { CountEventRepositoryService } from '../../models/count-event-repository.service';

describe('DayOfWeekHistogramPage', () => {
  let component: DayOfWeekHistogramPage;
  let fixture: ComponentFixture<DayOfWeekHistogramPage>;

  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let countEventRepositoryService: CountEventRepositoryService;
  let counterAnalyticsService: CounterAnalyticsService;

  beforeEach(async(() => {
    counter = new Counter();
    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
      },
    } as any;

    countEventRepositoryService = new CountEventRepositoryService(
      {} as any
    );

    counterAnalyticsService = new CounterAnalyticsService(
      countEventRepositoryService,
    );

    TestBed.configureTestingModule({
      declarations: [ DayOfWeekHistogramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CounterAnalyticsService, useValue: counterAnalyticsService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOfWeekHistogramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
