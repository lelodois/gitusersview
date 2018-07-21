import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouters} from './app.router';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent
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
