import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoriesComponent } from './admin-categories.component';
import { AdminCategoriesPageRoutingModule } from './admin-categories-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [AdminCategoriesComponent],
    imports: [CommonModule, AdminCategoriesPageRoutingModule, SharedModule],
})
export class AdminCategoriesModule {}
