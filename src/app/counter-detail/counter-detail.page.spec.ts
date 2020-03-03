import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { Counter } from '../models/counter';

import { CounterDetailPage } from './counter-detail.page';

describe('CounterDetailPage', () => {
  let component: CounterDetailPage;
  let fixture: ComponentFixture<CounterDetailPage>;

  let counter: Counter;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    counter = new Counter();

    activatedRoute = {
      snapshot: {
        data: {
          counter,
        },
      },
    } as any;

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ CounterDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailPage);

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
