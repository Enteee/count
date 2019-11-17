import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Vibration } from '@ionic-native/vibration/ngx';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';
import { AppStateService } from '../../services/app-state.service';

import { PlusMinusCounterComponent } from './plus-minus-counter.component';

describe('PlusMinusCounterComponent', () => {
  let component: PlusMinusCounterComponent;
  let fixture: ComponentFixture<PlusMinusCounterComponent>;
  let counter: Counter;
  let counterService: CounterService;
  let appStateService: AppStateService;
  let vibration: Vibration;

  beforeEach(async(() => {

    appStateService = new AppStateService(
      {} as any,
      {} as any,
      {} as any
    );

    counterService = new CounterService(
      {} as any,
      {} as any,
      {} as any,
      appStateService,
    );
    spyOn(
      counterService,
      'count'
    );

    vibration = {
      vibrate: () => {},
    } as any;
    spyOn(
      vibration,
      'vibrate',
    );

    TestBed.configureTestingModule({
      declarations: [ PlusMinusCounterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterService, useValue: counterService },
        { provide: AppStateService, useValue: appStateService },
        { provide: Vibration, useValue: vibration },
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

    component.countMinus();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(1);
      expect(counterService.count).toHaveBeenCalledWith(
        counter, COUNT_AMOUNT
      );
    });
  }));

  it('should vibrate on count', async(() => {
    counter.vibrate = true;
    component.countPlus();

    fixture.whenStable().then(() => {
      expect(vibration.vibrate).toHaveBeenCalledTimes(1);
      expect(vibration.vibrate).toHaveBeenCalledWith(
        PlusMinusCounterComponent.VIBRATION_PATTERN_PLUS
      );
    });
  }));

  it('should not vibrate on count if disabled', async(() => {
    counter.vibrate = false;
    component.countPlus();

    fixture.whenStable().then(() => {
      expect(vibration.vibrate).toHaveBeenCalledTimes(0);
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
