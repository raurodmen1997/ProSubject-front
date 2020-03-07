
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BusquedaAsignaturaComponent } from './busqueda-asignatura/busqueda-asignatura.component';
import { HomeComponent } from './home/home.component';





@NgModule({
    declarations: [
        PagesComponent,
        BusquedaAsignaturaComponent,
        HomeComponent,
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
