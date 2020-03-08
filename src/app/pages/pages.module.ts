
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BusquedaAsignaturaComponent } from './busqueda-asignatura/busqueda-asignatura.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';






@NgModule({
    declarations: [
        PagesComponent,
        BusquedaAsignaturaComponent,
        HomeComponent,
    ],
    exports: [
        CommonModule
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class PagesModule { }
