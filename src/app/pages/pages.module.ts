
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';





@NgModule({
    declarations: [
        PagesComponent,
    ],
    exports: [
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule
    ]
})
export class PagesModule { }
