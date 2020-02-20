import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourOfDayRadarComponent } from './hour-of-day-radar.component';

describe('HourOfDayRadarComponent', () => {
  let component: HourOfDayRadarComponent;
  let fixture: ComponentFixture<HourOfDayRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourOfDayRadarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
  });
});
