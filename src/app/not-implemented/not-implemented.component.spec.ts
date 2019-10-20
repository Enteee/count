import { CUSTOM_ELEMENTS_SCHEMA, Renderer2, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplementedComponent } from './not-implemented.component';

describe('NotImplementedComponent', () => {
  let component: NotImplementedComponent;
  let fixture: ComponentFixture<NotImplementedComponent>;
  let renderer: Renderer2;
  let elementRef: ElementRef;
  let modalController: ModalController;
  let appStateRepositoryService: AppStateRepositoryService;
  let appState: AppState;

  beforeEach(async(() => {

    renderer = {} as any;

    elementRef = {} as any;

    modalController = {} as any;

    appState = new AppState();
    appStateRepositoryService = new AppStateRepositoryService(
      {} as any
    );

    spyOnProperty(
      appStateRepositoryService,
      'state'
    ).and.returnValue(appState);

    TestBed.configureTestingModule({
      declarations: [ NotImplementedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Renderer2, useValue: renderer},
        {provide: ElementRef, useValue: elementRef},
        {provide: ModalController, useValue: modalController},
        {provide: AppStateRepositoryService, useValue: appStateRepositoryService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
