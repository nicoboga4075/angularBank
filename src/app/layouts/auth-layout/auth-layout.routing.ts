import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }   from '../../pages/authentification/sign-in.component';
import { SignUpComponent }   from '../../pages/authentification/sign-up.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: SignInComponent },
    { path: 'register', component: SignUpComponent },
   
];
