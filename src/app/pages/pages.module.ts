
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BusquedaAsignaturaComponent } from './busqueda-asignatura/busqueda-asignatura.component';
import { HomeComponent } from './home/home.component';
import { ListadoProfesoresComponent } from './busqueda-asignatura/listado-profesores/listado-profesores.component';

//----CRISTIAN----
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";



@NgModule({
    declarations: [
        PagesComponent,
        BusquedaAsignaturaComponent,
        HomeComponent,
        ListadoProfesoresComponent,
    ],
    exports: [
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        SharedModule,
        BrowserModule,
        NgxPaginationModule
    ]
})
export class PagesModule { }
