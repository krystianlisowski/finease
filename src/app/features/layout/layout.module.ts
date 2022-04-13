import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    ClientComponent,
    AdminComponent,
    PublicComponent
  ],
  exports: [
    ClientComponent,
    AdminComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class LayoutModule { }
