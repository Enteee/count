import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfWeekHistogramComponent } from './day-of-week-histogram.component';
import { Counter } from '../../models/counter';
import { ActivatedRoute } from '@angular/router';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { CountEventRepositoryService } from '../../models/count-event-repository.service';

describe('DayOfWeekHistogramComponent', () => {
  let component: DayOfWeekHistogramComponent;
  let fixture: ComponentFixture<DayOfWeekHistogramComponent>;

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
      declarations: [ DayOfWeekHistogramComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CounterAnalyticsService, useValue: counterAnalyticsService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOfWeekHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
