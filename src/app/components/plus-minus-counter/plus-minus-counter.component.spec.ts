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

    router = TestBed.inject(Router);
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

  it('should not count plus if counter is locked', async(() => {
    const COUNT_AMOUNT = 10;

    counter.plusCount = COUNT_AMOUNT;
    counter.locked = true;

    component.countPlus();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(0);
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

  it('should not count minus if counter is locked', async(() => {
    const COUNT_AMOUNT = 10;

    counter.minusCount = COUNT_AMOUNT;
    counter.locked = true;

    component.countMinus();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(0);
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

  it('should swipe click on left swipe', async(() => {

    spyOn(
      component,
      'countPlus'
    );

    spyOn(
      component,
      'countMinus'
    );

    counter.minusCount = -1;
    counter.plusCount = 1;

    fixture.detectChanges();

    component.onStart({} as any);

    /**
     * fake element with following widths:
     *
     * | left | center | right |
     * | 10px |  80px  |  10px |
     *
     * => rootItem = 100px;
     */
    component.rootItemWidth = 100;
    component.rightButtonWidth = 10;
    component.leftButtonWidth = 10;

    // move to swipe click position
    component.onMoveHandler({
      deltaX: -(component.rootItemWidth * component.SWIPE_CLICK_WIDTH_RATIO + 1)
    } as any);
    component.onEnd({} as any);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.countPlus).toHaveBeenCalledTimes(1);
      expect(component.countMinus).toHaveBeenCalledTimes(0);
    });
  }));

  it('should swipe click on right swipe', async(() => {

    spyOn(
      component,
      'countPlus'
    );

    spyOn(
      component,
      'countMinus'
    );

    counter.minusCount = -1;
    counter.plusCount = 1;

    fixture.detectChanges();

    component.onStart({} as any);

    /**
     * fake element with following widths:
     *
     * | left | center | right |
     * | 10px |  80px  |  10px |
     *
     * => rootItem = 100px;
     */
    component.rootItemWidth = 100;
    component.rightButtonWidth = 10;
    component.leftButtonWidth = 10;

    // move to swipe click position
    component.onMoveHandler({
      deltaX: component.rootItemWidth * component.SWIPE_CLICK_WIDTH_RATIO + 1
    } as any);

    component.onEnd({} as any);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.countPlus).toHaveBeenCalledTimes(0);
      expect(component.countMinus).toHaveBeenCalledTimes(1);
    });
  }));

  it('should swipe click reset to normal', async(() => {

    spyOn(
      component,
      'countPlus'
    );

    spyOn(
      component,
      'countMinus'
    );

    counter.minusCount = -1;
    counter.plusCount = 1;

    fixture.detectChanges();

    component.onStart({} as any);

    /**
     * fake element with following widths:
     *
     * | left | center | right |
     * | 10px |  80px  |  10px |
     *
     * => rootItem = 100px;
     */
    component.rootItemWidth = 100;
    component.rightButtonWidth = 10;
    component.leftButtonWidth = 10;

    // move to swipe click position
    component.onMoveHandler({
      deltaX: component.rootItemWidth * component.SWIPE_CLICK_WIDTH_RATIO + 1
    } as any);

    // move away from swipe click position
    component.onMoveHandler({
      deltaX: -1
    } as any);

    component.onEnd({} as any);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.countPlus).toHaveBeenCalledTimes(0);
      expect(component.countMinus).toHaveBeenCalledTimes(0);
    });
  }));

  it('should not swipe click on count == 0', async(() => {

    spyOn(
      component,
      'countPlus'
    );

    spyOn(
      component,
      'countMinus'
    );

    counter.minusCount = 0;
    counter.plusCount = 0;

    fixture.detectChanges();

    component.onStart({} as any);

    /**
     * fake element with following widths:
     *
     * | left | center | right |
     * | 10px |  80px  |  10px |
     *
     * => rootItem = 100px;
     */
    component.rootItemWidth = 100;
    component.rightButtonWidth = 10;
    component.leftButtonWidth = 10;

    // move to swipe click position
    component.onMoveHandler({
      deltaX: component.rootItemWidth * component.SWIPE_CLICK_WIDTH_RATIO + 1
    } as any);

    component.onEnd({} as any);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.countPlus).toHaveBeenCalledTimes(0);
      expect(component.countMinus).toHaveBeenCalledTimes(0);
    });
  }));

  it('should disable click events during swipeClick', async(() => {

    counter.minusCount = -1;
    counter.plusCount = 1;

    fixture.detectChanges();

    component.onStart({} as any);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.rightButton.nativeElement.style.pointerEvents).toEqual('none');
      expect(component.leftButton.nativeElement.style.pointerEvents).toEqual('none');
      expect(component.textCenter.nativeElement.style.pointerEvents).toEqual('none');
    });
  }));

  it('should show details', async(() => {

    component.showDetails();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith(['/counter-detail', counter.id])
    });
  }));

  it('should not show details if disabled', async(() => {

    component.showDetailsOnClick = false;
    component.showDetails();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(router.navigate).toHaveBeenCalledTimes(0);
    });
  }));

});
