
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';

import { TodoListComponent } from './component/todoList.component';
import { APP_MATERIAL } from '../../app/app.material';
import {SharedModule} from "../../shared/shared-routing.module";

const routes: Routes = [{
  path: '',
  component: TodoListComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    APP_MATERIAL,
    SharedModule
  ],
  exports: [ RouterModule ],
  providers:[CdkColumnDef],
  declarations: [ TodoListComponent ]
})
export class TodoListRoutingModule { }
