import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfWeekHistogramApexComponent } from './day-of-week-histogram-apex.component';

describe('DayOfWeekHistogramApexComponent', () => {
  let component: DayOfWeekHistogramApexComponent;
  let fixture: ComponentFixture<DayOfWeekHistogramApexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOfWeekHistogramApexComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOfWeekHistogramApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
