import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { Counter } from '../models/counter';
import { CounterService } from '../services/counter.service';

import { FullscreenCounterPage, FullScreenCounterType } from './fullscreen-counter.page';

describe('FullscreenCounterPage', () => {
  let component: FullscreenCounterPage;
  let fixture: ComponentFixture<FullscreenCounterPage>;

  let counter: Counter;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let counterService: CounterService;

  beforeEach(async(() => {
    counter = new Counter();

    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
        paramMap: {
          get: () => {},
        }
      },
    } as any;
    spyOn(
      activatedRoute.snapshot.paramMap,
      'get',
    ).and.returnValue('plus');

    counterService = new CounterService(
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
    );

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ FullscreenCounterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute },
        {provide: CounterService, useValue: counterService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenCounterPage);

    router = TestBed.inject(Router);
    spyOn(
      router,
      'navigate'
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('close should navigate away', async(() => {
    component.close();

    fixture.whenStable().then(() => {
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith(['/counters']);
    });
  }));

  it('count does plus count', async(() => {
    spyOn(
      counterService,
      'count'
    );

    counter.plusCount = 1;
    counter.minusCount = 2;

    component.type = FullScreenCounterType.plus;
    component.count();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(1);
      expect(counterService.count).toHaveBeenCalledWith(
        counter,
        counter.plusCount,
      );
    });
  }));

  it('count does minus count', async(() => {
    spyOn(
      counterService,
      'count'
    );

    counter.plusCount = 1;
    counter.minusCount = 2;

    component.type = FullScreenCounterType.minus;
    component.count();

    fixture.whenStable().then(() => {
      expect(counterService.count).toHaveBeenCalledTimes(1);
      expect(counterService.count).toHaveBeenCalledWith(
        counter,
        counter.minusCount,
      );
    });
  }));
});
