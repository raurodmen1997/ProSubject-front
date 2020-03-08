import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { BusquedaAsignaturaComponent } from './busqueda-asignatura/busqueda-asignatura.component';
import { HomeComponent } from './home/home.component';
import { ListadoProfesoresComponent } from './busqueda-asignatura/listado-profesores/listado-profesores.component';
import { LoginComponent } from './login/login.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'busqueda-asignatura', component: BusquedaAsignaturaComponent, data:{titulo:'Busqueda de asignatura'} },
            { path: 'inicio', component: HomeComponent, data:{titulo:'Inicio'} },
            { path:'login', component:LoginComponent, data:{titulo:'Inicio sesión'}},


            //----CRISTIAN----
            {path:'profesores', component: ListadoProfesoresComponent, data: {titulo:'Listado profesores'}},

            { path: '', redirectTo: '/inicio', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
