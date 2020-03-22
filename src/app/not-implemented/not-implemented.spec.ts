import { Renderer2, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { NotImplemented } from './not-implemented';

describe('NotImplemented', () => {
  let instance: NotImplemented;

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

    modalController = {
      create: () => {},
    } as any;
    spyOn(modalController, 'create');

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

  it('should present modal on event if appState didn\'t disable not implemeneted', () => {
    spyOn(instance, 'presentModal')
    appState.disableNotImplemented = false;

    instance.onEvent({} as any);

    expect(instance.presentModal).toHaveBeenCalledTimes(1);
  });

  it('should not present modal on event if appState disable not implemeneted', () => {
    spyOn(instance, 'presentModal')
    appState.disableNotImplemented = true;

    instance.onEvent({} as any);

    expect(instance.presentModal).toHaveBeenCalledTimes(0);
  });
});
