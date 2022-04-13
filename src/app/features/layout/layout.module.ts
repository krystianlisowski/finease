import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';



@NgModule({
  declarations: [
    ClientComponent,
    AdminComponent,
    PublicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
