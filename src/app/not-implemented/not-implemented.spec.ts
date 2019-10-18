import { Renderer2, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplemented } from './not-implemented';

describe('NotImplemented', () => {
  let instance: NotImplemented

  let renderer: Renderer2;
  let elementRef: ElementRef;
  let modalController: ModalController;
  let appStateRepositoryService: AppStateRepositoryService;
  let appState: AppState;

  beforeEach(async(() => {
    renderer = {} as any;

    elementRef = {
      nativeElement: {
        style: {
          display: '?'
        },
      },
    } as any;

    modalController = {} as any;

    appState = new AppState();
    appStateRepositoryService = new AppStateRepositoryService(
      {} as any
    );

    spyOnProperty(
      appStateRepositoryService,
      'state'
    ).and.returnValue(appState);

    instance = new NotImplemented(
      renderer,
      elementRef,
      modalController,
      appStateRepositoryService,
    );
  }));

  it('should create an instance', () => {
    expect(instance).toBeTruthy();
  });
});
