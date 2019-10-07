import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAnalyticsPage } from './counter-analytics.page';

describe('CounterAnalyticsPage', () => {
  let component: CounterAnalyticsPage;
  let fixture: ComponentFixture<CounterAnalyticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterAnalyticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
