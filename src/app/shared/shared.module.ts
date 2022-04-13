import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, MaterialModule],
})
export class SharedModule {}
