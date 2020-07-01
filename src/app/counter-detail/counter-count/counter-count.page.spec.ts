import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { AppState } from '../../models/app-state';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { CounterCountPage } from './counter-count.page';

describe('CounterCountPage', () => {
  let component: CounterCountPage;
  let fixture: ComponentFixture<CounterCountPage>;
  let router: Router;

  let appState: AppState;
  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let counterService: CounterService;

  beforeEach(async(() => {
    appState = new AppState();
    counter = new Counter();

    activatedRoute = {
      snapshot: {
        data: {
          appState,
          counter,
        },
      },
    } as any;

    counterService = new CounterService(
      {} as any,
      {} as any,
      {} as any,
      {} as any,
      {} as any,
    );

    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ CounterCountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute },
        {provide: CounterService, useValue: counterService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCountPage);

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

  it('should reset', async(() => {
    spyOn(counterService, 'reset');

    component.reset();

    fixture.whenStable().then(() => {
      expect(counterService.reset).toHaveBeenCalledTimes(1);
      expect(counterService.reset).toHaveBeenCalledWith(counter);
    });
  }));

  it('can delete', async(() => {

    spyOn(
      counterService,
      'delete',
    );

    component.deleteCounter();

    fixture.whenStable().then(() => {
      expect(counterService.delete).toHaveBeenCalledTimes(1);
      expect(counterService.delete).toHaveBeenCalledWith(counter);

      expect(router.navigate).toHaveBeenCalledWith(['/counters']);
    });
  }));


});
