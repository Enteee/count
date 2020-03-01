import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfMonthHistogramComponent } from './day-of-month-histogram.component';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';

describe('DayOfMonthHistogramComponent', () => {
  let component: DayOfMonthHistogramComponent;
  let fixture: ComponentFixture<DayOfMonthHistogramComponent>;
  let counterAnalyticsService: CounterAnalyticsService;

  beforeEach(async(() => {
    counterAnalyticsService = new CounterAnalyticsService(
      {} as any
    );

    spyOn(
      counterAnalyticsService,
      'extractHistogramData',
    ).and.returnValue([]);

    TestBed.configureTestingModule({
      declarations: [ DayOfMonthHistogramComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterAnalyticsService, useValue: counterAnalyticsService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOfMonthHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(counterAnalyticsService.extractHistogramData).toHaveBeenCalledTimes(2);
  });
});
