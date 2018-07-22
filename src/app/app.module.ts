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
import {NgxPaginationModule} from 'ngx-pagination';
import {RepositoryDetailComponent} from './components/repository-detail/repository-detail.component';
import {UserFotoComponent} from './components/user-foto/user-foto.component';
import {FriendsComponent} from './components/friends/friends.component';


@NgModule({
    imports:
        [
            HttpClientModule,
            BrowserModule,
            RouterModule,
            NgxPaginationModule,
            APP_ROUTERS
        ],
    declarations:
        [
            AppComponent,
            HomeComponent,
            NavSearchComponent,
            UserComponent,
            RepositoryComponent,
            RepositoryDetailComponent,
            UserFotoComponent,
            FriendsComponent
        ],
    exports:
        [
            HomeComponent,
            NavSearchComponent,
            UserComponent,
            RepositoryComponent,
            RepositoryDetailComponent,
            UserFotoComponent,
            FriendsComponent
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
