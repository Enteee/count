import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusTotalsPieChartComponent } from './plus-minus-totals-pie-chart.component';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';

describe('PlusMinusTotalsPieChartComponent', () => {
  let component: PlusMinusTotalsPieChartComponent;
  let fixture: ComponentFixture<PlusMinusTotalsPieChartComponent>;
  let counterAnalyticsService: CounterAnalyticsService;

  beforeEach(async(() => {
    counterAnalyticsService = new CounterAnalyticsService(
      {} as any
    );

    spyOn(
      counterAnalyticsService,
      'extractTotalData',
    ).and.returnValue({
      totals: {
        positive: 0,
        negative: 0,
        neutral: 0,
      },
      events: {
        change: 0,
        reset: 0,
        positive: 0,
        negative: 0,
        neutral: 0,
      }
    });

    TestBed.configureTestingModule({
      declarations: [ PlusMinusTotalsPieChartComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterAnalyticsService, useValue: counterAnalyticsService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusTotalsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(counterAnalyticsService.extractTotalData).toHaveBeenCalledTimes(1);
  });
});
