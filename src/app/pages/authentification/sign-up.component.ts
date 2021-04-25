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
        
        var formData: any = new FormData();
    	formData.append("nom", this.form_signup.get('nom').value);
    	formData.append("prenom", this.form_signup.get('prenom').value);
    	formData.append("email", this.form_signup.get('nom').value);
    	formData.append("telephone", this.form_signup.get('telephone').value);
    	formData.append("password", this.form_signup.get('password').value);

  		this.authService.postItem('http://localhost:8888/SECURITY-SERVICE/register',formData).subscribe(

        (response) => {
             Swal.fire( {icon: 'success',
                    title: 'Good job !',
                    text: 'Check your email box !',
                    showConfirmButton: false
  
                 });

           

                 
    	function GoRegister(){ this.router.navigate(['/login']);}

    	setTimeout(GoRegister, 2000);


        },(error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.status.toString()+" : "+error.statusText});
        });

  
	}
}


    

