import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouters} from './app.router';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRouters
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
