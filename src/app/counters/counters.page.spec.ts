import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Counter } from '../models/counter';
import { CounterService } from '../services/counter.service';

import { ComponentsModule } from '../components/components.module';

import { CountersPage } from './counters.page';

describe('CountersPage', () => {
  let component: CountersPage;
  let fixture: ComponentFixture<CountersPage>;
  let countersPage: HTMLElement;
  let counterService: CounterService;

  beforeEach(async(() => {

    counterService = new CounterService(
      {} as any,
      {} as any,
      {} as any,
    );

    TestBed.configureTestingModule({
      declarations: [
        CountersPage
      ],
      imports: [
        IonicModule.forRoot(),
        ComponentsModule
      ],
      providers: [
        { provide: CounterService, useValue: counterService },
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add a new counter', () => {
    countersPage = fixture.nativeElement;

    spyOn(
      counterService,
      'addCounter'
    );

    component.addCounter();
    expect(counterService.addCounter).toHaveBeenCalledTimes(1);
  });

  it('should provide a list of counters', () => {
    countersPage = fixture.nativeElement;

    const countersFixture = [
      new Counter(),
      new Counter(),
      new Counter(),
      new Counter(),
    ];

    const allSortBySortOrderSpy = spyOnProperty(
      counterService,
      'allSortBySortOrder',
      'get'
    ).and.returnValue(countersFixture);

    expect(component.counters).toEqual(countersFixture);
    expect(allSortBySortOrderSpy).toHaveBeenCalledTimes(1);
  });

});
