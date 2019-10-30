import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';
import { PlusMinusCounterComponent } from './plus-minus-counter.component';

describe('PlusMinusCounterComponent', () => {
  let component: PlusMinusCounterComponent;
  let fixture: ComponentFixture<PlusMinusCounterComponent>;
  let counter: Counter;
  let counterService: CounterService;

  beforeEach(async(() => {

    counterService = new CounterService(
      {} as any,
      {} as any
    );

    TestBed.configureTestingModule({
      declarations: [ PlusMinusCounterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterService, useValue: counterService },
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

  it('should count plus', async(() => {
    const COUNT_AMOUNT = 10;

    counter.plusCount = COUNT_AMOUNT;

    spyOn(
      counterService,
      'count'
    );

    component.countPlus();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(1);
      expect(counterService.count).toHaveBeenCalledWith(
        counter, COUNT_AMOUNT
      );
    });
  }));

  it('should count minus', async(() => {
    const COUNT_AMOUNT = -10;

    counter.minusCount = COUNT_AMOUNT;

    spyOn(
      counterService,
      'count'
    );

    component.countMinus();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(1);
      expect(counterService.count).toHaveBeenCalledWith(
        counter, COUNT_AMOUNT
      );
    });
  }));

  it('button disapper when count is zero', async(() => {
    const root = fixture.nativeElement;

    counter.minusCount = 0;
    counter.plusCount = 0;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const countButtons = root.querySelectorAll('ion-button');
      expect(countButtons.length).toEqual(0);
    });
  }));

});
