import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from './shared/loader/loader.module';
import { LayoutModule } from './features/layout/layout.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        LoaderModule,
        LayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
