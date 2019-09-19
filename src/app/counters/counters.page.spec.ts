import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountersPage } from './counters.page';

describe('CountersPage', () => {
  let component: CountersPage;
  let fixture: ComponentFixture<CountersPage>;
  let countersPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a counters of 10 elements', () => {
    countersPage = fixture.nativeElement;
    const items = countersPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
