import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';

export const AppRouters: ModuleWithProviders =
    RouterModule.forRoot(
        [
            {
                path: '', component: HomeComponent
            },
        ]
    );