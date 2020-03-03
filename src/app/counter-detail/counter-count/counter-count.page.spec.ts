import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { CounterCountPage } from './counter-count.page';

describe('CounterCountPage', () => {
  let component: CounterCountPage;
  let fixture: ComponentFixture<CounterCountPage>;
  let router: Router;

  let counter: Counter;
  let activatedRoute: ActivatedRoute;
  let counterService: CounterService;

  beforeEach(async(() => {
    counter = new Counter();

    activatedRoute = {
      snapshot: {
        data: {
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

});
