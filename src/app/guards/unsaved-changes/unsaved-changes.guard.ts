import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

export interface HasUnsavedChanges {
  hasUnsavedChanges: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<HasUnsavedChanges> {
  constructor(public alertController: AlertController) {}

  async canDeactivate(component: HasUnsavedChanges,
                      route: ActivatedRouteSnapshot,
                      state: RouterStateSnapshot) {

    if (!component.hasUnsavedChanges()) {
      return true;
    }

    return await this.canDiscard();
  }

  /**
   * Ask the user if they want to discard unsaved changes
   */
  canDiscard(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
          header: 'Unsaved Changes',
          message: 'You are trying to leave a page which has unsaved changes',
          buttons: [
            {
              text: 'Leave',
              handler: _ => resolve(true)
            },
            {
              text: 'Stay',
              handler: _ => resolve(false)
            }
          ],
      });
      await alert.present();
    });
  }

}

