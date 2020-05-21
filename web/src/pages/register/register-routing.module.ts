
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './component/register.component';
import { APP_MATERIAL } from '../../app/app.material';

const routes: Routes = [{
  path: '',
  component: RegisterComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    APP_MATERIAL
  ],
  exports: [ RouterModule ],
  declarations: [ RegisterComponent ]
})
export class RegisterRoutingModule { }
