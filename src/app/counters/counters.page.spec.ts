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

  it('should list counters', () => {
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

  it('can reorder', async(() => {
    spyOn(
      counterService,
      'reorder',
    );

    const ev = {
      detail: {
        from: 10,
        to: 1,
        complete: () => {},
      }
    };
    spyOn(
      ev.detail,
      'complete',
    );

    component.reorder(ev);

    fixture.whenStable().then(() => {
      expect(counterService.reorder).toHaveBeenCalledTimes(1);
      expect(counterService.reorder).toHaveBeenCalledWith(
        ev.detail.from,
        ev.detail.to,
      );

      expect(ev.detail.complete).toHaveBeenCalledTimes(1);
    });
  }));

});
