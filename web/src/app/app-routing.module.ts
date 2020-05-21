import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: '../pages/login/login-routing.module#LoginRoutingModule'
  },
  {
    path: 'register',
    loadChildren: '../pages/register/register-routing.module#RegisterRoutingModule'
  },
  {
    path: 'to-do-list',
    loadChildren: '../pages/todoList/todoList-routing.module#TodoListRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
