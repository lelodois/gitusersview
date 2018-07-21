import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {RepositoryDetailComponent} from './components/repository-detail/repository-detail.component';

export const APP_ROUTERS: ModuleWithProviders =
    RouterModule.forRoot(
        [
            {
                path: '', component: HomeComponent
            },
            {
                path: ':login', component: HomeComponent
            },
            {
                path: 'repository/:id', component: RepositoryDetailComponent
            }
        ], {useHash: false}
    );