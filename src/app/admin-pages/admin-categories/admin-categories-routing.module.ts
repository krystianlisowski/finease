import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminCategoriesComponent } from './admin-categories.component'

const routes: Routes = [{ path: '', component: AdminCategoriesComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class AdminCategoriesPageRoutingModule {}