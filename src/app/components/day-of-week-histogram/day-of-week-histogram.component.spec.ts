import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfWeekHistogramComponent } from './day-of-week-histogram-apex.component';

describe('DayOfWeekHistogramComponent', () => {
  let component: DayOfWeekHistogramComponent;
  let fixture: ComponentFixture<DayOfWeekHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOfWeekHistogramComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
