import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HeaderService,
    BusquedaAsignaturaService,
    GradoService,
    EspacioService,
    CursoService
 } from './services.index';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HeaderService,
    BusquedaAsignaturaService,
    GradoService,
    EspacioService,
    CursoService
  ],
  declarations: []
})
export class ServiceModule { }
