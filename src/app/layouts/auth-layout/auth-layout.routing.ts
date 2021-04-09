import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Authentication Component
import { SignInComponent } from '../../pages/sign-in/sign-in.component';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';


export const AuthLayoutRoutes: Routes = [

 {
        path: '',
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
                data: {
                    title: 'sign-in'
                }
            },
            
            {
                path: 'sign-up',
                component: SignUpComponent,
                data: {
                    title: 'sign-up'
                }
            },
            
        ]
    }
   
   
];
