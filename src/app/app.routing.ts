import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


export const AppRoutes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }

    ]
  },

 {
    path: '',
    component: AuthLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }

    ]
  },
  
]
