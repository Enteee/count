import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { AppState } from '../../models/app-state';
import { AppStateService } from '../../services/app-state.service';

import { FullScreenCounterType } from '../../fullscreen-counter/fullscreen-counter.page';

import { PlusMinusCounterComponent } from './plus-minus-counter.component';

describe('PlusMinusCounterComponent', () => {
  let component: PlusMinusCounterComponent;
  let fixture: ComponentFixture<PlusMinusCounterComponent>;
  let router: Router;

  let counter: Counter;
  let counterService: CounterService;

  let appState: AppState;
  let appStateService: AppStateService;

  beforeEach(async(() => {

    appState = new AppState();
    appStateService = new AppStateService(
      {} as any,
      {} as any,
      {} as any
    );
    spyOnProperty(
      appStateService,
      'appState',
    ).and.returnValue(appState);

    counterService = new CounterService(
      {} as any,
      {} as any,
      {} as any,
      appStateService,
      {} as any,
    );
    spyOn(
      counterService,
      'count'
    );

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ PlusMinusCounterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CounterService, useValue: counterService },
        { provide: AppStateService, useValue: appStateService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusCounterComponent);

    router = TestBed.get(Router);
    spyOn(
      router,
      'navigate'
    );

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

  it('should open plus fullscreen counter', async(() => {
    component.openFullScreenCounter(
      FullScreenCounterType.plus,
    );

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith([
        '/fullscreen-counter',
        'plus',
        counter.id
      ]);
    });
  }));

  it('should open minus fullscreen counter', async(() => {
    component.openFullScreenCounter(
      FullScreenCounterType.minus,
    );

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith([
        '/fullscreen-counter',
        'minus',
        counter.id
      ]);
    });
  }));

});
