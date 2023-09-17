import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: TodoPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'add-edit',
        loadChildren: () => import('./pages/add-edit/add-edit.module').then(m => m.AddEditPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPageRoutingModule { }
