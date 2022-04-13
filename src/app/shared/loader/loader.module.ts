import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    imports: [CommonModule, MaterialModule],
})
export class LoaderModule {}
