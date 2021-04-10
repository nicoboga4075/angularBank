import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';



@Component({
    moduleId: module.id,
    selector: 'sign-in-cmp',
    templateUrl: 'sign-in.component.html'
})

export class SignInComponent  {

     
    form_signin:FormGroup;

    constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) {

        this.form_signin= this.fb.group({
            email: '',
            password:'',
        });
    }


    login() {

        const formValue = this.form_signin.value;

        const body=JSON.stringify(formValue);

        console.log(body);

}

}
