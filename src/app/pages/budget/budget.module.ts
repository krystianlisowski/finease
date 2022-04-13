import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { BudgetPageRoutingModule } from './budget-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [BudgetComponent],
    imports: [CommonModule, BudgetPageRoutingModule, SharedModule],
})
export class BudgetModule {}
