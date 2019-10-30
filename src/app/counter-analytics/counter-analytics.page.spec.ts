import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAnalyticsPage } from './counter-analytics.page';
import { Counter } from '../models/counter';
import { ActivatedRoute } from '@angular/router';

describe('CounterAnalyticsPage', () => {
  let component: CounterAnalyticsPage;
  let fixture: ComponentFixture<CounterAnalyticsPage>;

  let counter: Counter;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    counter = new Counter();
    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
      },
    } as any;

    TestBed.configureTestingModule({
      declarations: [ CounterAnalyticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
      ],
    })
    .compileComponents();
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
