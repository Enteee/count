import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfWeekHistogramComponent } from './day-of-week-histogram.component';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';

describe('DayOfWeekHistogramComponent', () => {
  let component: DayOfWeekHistogramComponent;
  let fixture: ComponentFixture<DayOfWeekHistogramComponent>;
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
      declarations: [ DayOfWeekHistogramComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterAnalyticsService, useValue: counterAnalyticsService },
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
    expect(counterAnalyticsService.extractHistogramData).toHaveBeenCalledTimes(2);
  });
});
