import { Component, Renderer2, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ModalController } from '@ionic/angular';

import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplementedDirective } from './not-implemented.directive';

@Component({
  template: `
  <div appNotImplemented></div>
  `,
})
class TestComponent {
  constructor() {
  }
}

class MockModalController {}
class MockAppStateRepositoryService {}

describe('NotImplementedDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(( () => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        NotImplementedDirective,
      ],
      providers: [
        {
          provide: ModalController,
          useClass: MockModalController,
        },
        {
          provide: AppStateRepositoryService,
          useClass: MockAppStateRepositoryService,
        }
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should create component', () => {
    expect(component).toBeDefined();
  });

});
