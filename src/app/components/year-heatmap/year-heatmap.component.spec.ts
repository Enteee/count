import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearHeatmapComponent } from './year-heatmap.component';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';

describe('YearHeatmapComponent', () => {
  let component: YearHeatmapComponent;
  let fixture: ComponentFixture<YearHeatmapComponent>;
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
      declarations: [ YearHeatmapComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterAnalyticsService, useValue: counterAnalyticsService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(counterAnalyticsService.extractHistogramData).toHaveBeenCalledTimes(12);
  });
});
