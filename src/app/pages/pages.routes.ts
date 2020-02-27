import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';




const pagesRoutes: Routes = [
    /*
    {
        path: '',
        component: PagesComponent,
        children: [

        ]
    }
    */
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
