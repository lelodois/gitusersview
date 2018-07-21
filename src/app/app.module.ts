import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_ROUTERS} from './app.router';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {EventsService} from './provider/service/events.service';
import {NavSearchComponent} from './components/nav-search/nav-search.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './provider/service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RepositoryComponent} from './components/repository/repository.component';
import {RepositoryService} from './provider/service/repository.service';

@NgModule({
    imports:
        [
            HttpClientModule,
            BrowserModule,
            RouterModule,
            APP_ROUTERS
        ],
    declarations:
        [
            AppComponent,
            HomeComponent,
            NavSearchComponent,
            UserComponent,
            RepositoryComponent
        ],
    exports:
        [
            HomeComponent,
            NavSearchComponent,
            UserComponent
        ],

    providers:
        [
            EventsService,
            UserService,
            RepositoryService
        ],
    bootstrap:
        [
            AppComponent
        ]
})
export class AppModule {
}
