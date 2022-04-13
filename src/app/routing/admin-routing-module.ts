import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full',
    },
    {
      path: 'categories',
      loadChildren: () => import('../admin-pages/admin-categories/admin-categories.module').then((m) => m.AdminCategoriesModule),
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)]
  })
  export class AdminRoutingModule { }
  