import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusCounterComponent } from './plus-minus-counter.component';

describe('PlusMinusCounterComponent', () => {
  let component: PlusMinusCounterComponent;
  let fixture: ComponentFixture<PlusMinusCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusCounterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
