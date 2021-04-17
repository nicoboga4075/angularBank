import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { isPossiblePhoneNumber, isValidPhoneNumber, parsePhoneNumber,formatPhoneNumberIntl} from 'react-phone-number-input';

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
            nom:['',[Validators.required,Validators.minLength(2),Validators.pattern("[A-Z][a-z]+")]],
            prenom:['',[Validators.required,Validators.minLength(2),Validators.pattern("[A-Z][a-z]+")]],
            email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            telephone:['',[Validators.required]],
            password:['',[Validators.required,Validators.minLength(10)]]
        });
    }

    get f()

  	{
    	return this.form_signup.controls;
  	}


  	valid_phone(input:String)

  	{ if (isValidPhoneNumber(formatPhoneNumberIntl(input)))

  		{ return true;}

  	  return false;

  	}



    register() {


        if (this.form_signup.invalid) {
            return;
        }

        const formValue = this.form_signup.value;

        const body=JSON.stringify(formValue);

  		console.log(body);
	}
}

    

