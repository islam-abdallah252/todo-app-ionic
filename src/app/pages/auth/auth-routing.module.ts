import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },

  {
    path: 'login',
    loadChildren: () => import('./').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./').then(m => m.RegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./').then(m => m.ForgetPasswordPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
