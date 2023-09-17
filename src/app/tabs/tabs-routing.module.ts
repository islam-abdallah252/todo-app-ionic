import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      // {
      //   path: 'home',
      //   redirectTo: '/home/todo',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        loadChildren: () => import('./../pages/todo/todo.module').then(m => m.TodoPageModule)
      },

    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/home/todo',
  //   pathMatch: 'full'
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
