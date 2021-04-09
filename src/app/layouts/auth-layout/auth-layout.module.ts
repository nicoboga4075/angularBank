import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthLayoutRoutes } from './auth-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Authentication Component
import { SignInComponent } from '../../pages/sign-in/sign-in.component';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';

import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [

  SignInComponent,
  SignUpComponent,
  
  ],

  providers:[AuthService],
  
})

export class AuthLayoutModule {}
