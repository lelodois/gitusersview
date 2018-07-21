import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouters} from './app.router';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {EventsService} from './provider/service/events.service';
import {NavSearchComponent} from './components/nav-search/nav-search.component';

@NgModule({
    declarations:
        [
            AppComponent,
            HomeComponent,
            NavSearchComponent
        ],
    exports:
        [
            HomeComponent,
            NavSearchComponent
        ],
    imports:
        [
            BrowserModule,
            RouterModule,
            AppRouters
        ],
    providers:
        [
            EventsService
        ],
    bootstrap:
        [
            AppComponent
        ]
})
export class AppModule {
}
