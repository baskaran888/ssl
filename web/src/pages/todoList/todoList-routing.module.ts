
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './component/todoList.component';
import { APP_MATERIAL } from '../../app/app.material';

const routes: Routes = [{
  path: '',
  component: TodoListComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    APP_MATERIAL
  ],
  exports: [ RouterModule ],
  declarations: [ TodoListComponent ]
})
export class TodoListRoutingModule { }
