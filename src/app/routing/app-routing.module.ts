import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'budget',
    pathMatch: 'full',
  },
  {
    path: 'budget',
    data: { layout: 'client' },
    loadChildren: () => import('../pages/budget/budget.module').then((m) => m.BudgetModule)
  },
  {
    path: 'login',
    data: { layout: 'public' },
    loadChildren: () => import('../pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    data: { layout: 'admin' },
    loadChildren: () => import('./admin-routing-module').then((m) => m.AdminRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
