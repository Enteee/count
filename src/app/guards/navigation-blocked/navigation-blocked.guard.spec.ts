import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

import { NavigationBlockedGuard, HasNavigationBlocked } from './navigation-blocked.guard';

@Component({
  template: '<div></div>'
})
class HasNavigationBlockedMockComponent implements HasNavigationBlocked {
  hasNavigationBlockedValue: Observable<boolean> | Promise<boolean> | boolean;

  hasNavigationBlocked(): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasNavigationBlockedValue;
  }
}

describe('NavigationBlockedGuard', () => {
  let component: HasNavigationBlockedMockComponent;
  let fixture: ComponentFixture<HasNavigationBlockedMockComponent>;
  let guard: NavigationBlockedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ HasNavigationBlockedMockComponent ],
      schemas: [],
      providers: [],
    })
    .compileComponents();

    guard = TestBed.inject(NavigationBlockedGuard);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasNavigationBlockedMockComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should block navigation', (done) => {

    component.hasNavigationBlockedValue = true;

    guard.canDeactivate(component, {} as any, {} as any)
      .then((canDeactivate) => {
        expect(canDeactivate).toBeFalsy();
        done();
      })
      .catch(done);
  });

  it('should unblock navigation', (done) => {

    component.hasNavigationBlockedValue = false;

    guard.canDeactivate(component, {} as any, {} as any)
      .then((canDeactivate) => {
        expect(canDeactivate).toBeTruthy();
        done();
      })
      .catch(done);
  });

});
