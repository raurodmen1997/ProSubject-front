
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
    declarations: [
        PagesComponent,
    ],
    exports: [
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        SharedModule
    ]
})
export class PagesModule { }
