import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourOfDayRadarComponent } from './hour-of-day-radar.component';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';

describe('HourOfDayRadarComponent', () => {
  let component: HourOfDayRadarComponent;
  let fixture: ComponentFixture<HourOfDayRadarComponent>;
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
      declarations: [ HourOfDayRadarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterAnalyticsService, useValue: counterAnalyticsService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourOfDayRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(counterAnalyticsService.extractHistogramData).toHaveBeenCalledTimes(2);
  });
});
