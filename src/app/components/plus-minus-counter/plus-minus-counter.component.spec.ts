import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';
import { PlusMinusCounterComponent } from './plus-minus-counter.component';

describe('PlusMinusCounterComponent', () => {
  let component: PlusMinusCounterComponent;
  let fixture: ComponentFixture<PlusMinusCounterComponent>;
  let counter: Counter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusCounterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterService, useValue: {} as any},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusCounterComponent);
    component = fixture.componentInstance;

    counter = new Counter();
    component.counter = counter;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button disapper when count is zero', () => {
    const root = fixture.nativeElement;

    counter.minusCount = 0;
    counter.plusCount = 0;
    fixture.detectChanges();

    const countButtons = root.querySelectorAll('ion-button');
    expect(countButtons.length).toEqual(0);
  });

});
