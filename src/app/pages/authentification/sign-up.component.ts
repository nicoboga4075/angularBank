import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'sign-up-cmp',
    templateUrl: 'sign-up.component.html',
    styleUrls:['./css/main.css','./css/util.css','./vendor/css-hamburgers/hamburgers.min.css','./vendor/animate/animate.css','./fonts/font-awesome-4.7.0/css/font-awesome.min.css','./vendor/bootstrap/css/bootstrap.min.css','./vendor/select2/select2.min.css'],
})

export class SignUpComponent  {

form_signup:FormGroup;

    constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) {

        this.form_signup= this.fb.group({
            nom:'',
            prenom:'',
            email: '',
            telephone:'',
            password:'',
        });
    }


    signup() {

        const formValue = this.form_signup.value;

        const body=JSON.stringify(formValue);

        console.log(body);

}

    
}
