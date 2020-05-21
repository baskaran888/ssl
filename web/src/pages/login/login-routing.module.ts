
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { LoginComponent } from './component/login.component';
import { LoginComponent } from './component/login.component';
import { APP_MATERIAL } from '../../app/app.material';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    APP_MATERIAL
  ],
  exports: [ RouterModule ],
  declarations: [ LoginComponent ]
})
export class LoginRoutingModule { }
