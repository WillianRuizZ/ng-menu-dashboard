import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./busines/dashboard/dashboard.component')
      },
      {
        path: 'profile',
        loadComponent: () => import('./busines/profile/profile.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./busines/tables/tables.component')
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }

];
