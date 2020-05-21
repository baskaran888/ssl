
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkColumnDef } from '@angular/cdk/table';

import { SharedComponent } from './index';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_MATERIAL } from '../app/app.material';
import { MatTreeModule } from '@angular/material/tree';

@NgModule(
  {
    declarations: [
      SharedComponent

    ],
    imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      APP_MATERIAL,
      MatTreeModule
    ],
    entryComponents: [
    ],
    exports: [
      SharedComponent
    ],
    providers:[CdkColumnDef],

  })

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
