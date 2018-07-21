import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';

const APP_ROUTES: Routes =
    [
        {path: 'home', component: HomeComponent},
        {path: '*', redirectTo: 'home'}
    ];

export const AppRouters: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);