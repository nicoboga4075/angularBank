import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'sign-up-cmp',
    templateUrl: 'sign-up.component.html'
})

export class SignUpComponent  {

     
    form_signup:FormGroup;

    constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) {

        this.form_signup= this.fb.group({
            firstname:'',
            lastname:'',
            email: '',
            password:'',
        });
    }


    signup() {

        const formValue = this.form_signup.value;

        const body=JSON.stringify(formValue);

        console.log(body);

}

}
