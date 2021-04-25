
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AuthLayoutRoutes } from './auth-layout.routing';

import { SignInComponent } from '../../pages/authentification/sign-in.component';
import { SignUpComponent } from '../../pages/authentification/sign-up.component';


import { UserService } from '../../services/user.service';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

  providers:[UserService]
})

export class AuthLayoutModule {}
