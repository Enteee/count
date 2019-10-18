import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { ComponentsModule } from '../components/components.module';

import { CountersPage } from './counters.page';

describe('CountersPage', () => {
  let component: CountersPage;
  let fixture: ComponentFixture<CountersPage>;
  let countersPage: HTMLElement;
  let counterRepositoryService: CounterRepositoryService;

  beforeEach(async(() => {

    counterRepositoryService = new CounterRepositoryService(
      {} as any
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
        {provide: CounterRepositoryService, useValue: counterRepositoryService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add a new counter', () => {
    countersPage = fixture.nativeElement;

    spyOn(
      counterRepositoryService,
      'save'
    );

    component.addCounter();
    expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
  });

  it('should provide a list of counters', () => {
    countersPage = fixture.nativeElement;

    let countersFixture = [
      new Counter(),
      new Counter(),
      new Counter(),
      new Counter(),
    ]

    spyOnProperty(
      counterRepositoryService,
      'all',
      'get'
    ).and.returnValue(countersFixture);

    expect(component.counters).toEqual(countersFixture);
  });

});
