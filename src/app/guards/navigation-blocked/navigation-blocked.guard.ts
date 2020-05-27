import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface HasNavigationBlocked {
  hasNavigationBlocked: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationBlockedGuard implements CanDeactivate<HasNavigationBlocked> {
  constructor() {}

  async canDeactivate(component: HasNavigationBlocked,
                      route: ActivatedRouteSnapshot,
                      state: RouterStateSnapshot) {

    return !component.hasNavigationBlocked();
  }
}

