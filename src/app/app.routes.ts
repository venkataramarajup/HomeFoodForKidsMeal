import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'homefood', loadChildren: () => import('./homefood/homefood.module').then(m => m.HomefoodModule)
    },
    {
        path: '', redirectTo: '/homefood', pathMatch: 'full'
    },
    {
        path:'**', redirectTo: '/homefood', pathMatch: 'full'
    }
];
