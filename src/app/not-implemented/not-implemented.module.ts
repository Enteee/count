import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NotImplementedComponent } from './not-implemented.component';
import { NotImplementedModalPage } from './not-implemented-modal.page';
import { NotImplementedDirective } from './not-implemented.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    NotImplementedComponent,
    NotImplementedModalPage,
    NotImplementedDirective,
  ],
  entryComponents: [
    NotImplementedModalPage,
  ],
  exports: [
    NotImplementedComponent,
    NotImplementedDirective,
  ],
  providers: [
    InAppBrowser,
  ]
})
export class NotImplementedModule {
  static forRoot(): ModuleWithProviders<NotImplementedModule> {
    return {
      ngModule: NotImplementedModule,
      providers: [
      ]
    };
  }
}
