import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

import { UnsavedChangesGuard, HasUnsavedChanges } from './unsaved-changes.guard';

@Component({
  template: '<div></div>'
})
class HasUnsavedChangesMockComponent implements HasUnsavedChanges {
  hasUnsavedChangesValue: Observable<boolean> | Promise<boolean> | boolean;

  hasUnsavedChanges(): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasUnsavedChangesValue;
  }
}


describe('UnsavedChangesGuard', () => {
  let component: HasUnsavedChangesMockComponent;
  let fixture: ComponentFixture<HasUnsavedChangesMockComponent>;
  let guard: UnsavedChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ HasUnsavedChangesMockComponent ],
      schemas: [],
      providers: [],
    })
    .compileComponents();

    guard = TestBed.inject(UnsavedChangesGuard);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasUnsavedChangesMockComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should alert on unsaved changes', async(() => {
    spyOn(
      guard,
      'canDiscard'
    );

    component.hasUnsavedChangesValue = true;
    guard.canDeactivate(component, {} as any, {} as any);

    fixture.whenStable().then(() => {
      expect(guard.canDiscard).toHaveBeenCalledTimes(1);
    });
  }));

  it('should not alert on no unsaved changes', async(() => {
    spyOn(
      guard,
      'canDiscard'
    );

    component.hasUnsavedChangesValue = false;
    guard.canDeactivate(component, {} as any, {} as any);

    fixture.whenStable().then(() => {
      expect(guard.canDiscard).toHaveBeenCalledTimes(0);
    });
  }));

});
