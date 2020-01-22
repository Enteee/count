import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsavedChangesGuard } from './unsaved-changes/unsaved-changes.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UnsavedChangesGuard,
  ],
  exports: [
    UnsavedChangesGuard,
  ],
})
export class GuardsModule { }
