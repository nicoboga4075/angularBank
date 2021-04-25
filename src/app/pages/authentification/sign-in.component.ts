import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
    moduleId: module.id,
    selector: 'sign-in-cmp',
    templateUrl: 'sign-in.component.html',
    styleUrls:['./css/main.css','./css/util.css','./vendor/css-hamburgers/hamburgers.min.css','./vendor/animate/animate.css','./fonts/font-awesome-4.7.0/css/font-awesome.min.css','./vendor/bootstrap/css/bootstrap.min.css','./vendor/select2/select2.min.css'],
})

export class SignInComponent  {

	id=1;

	form_signin:FormGroup;

    constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) {

        this.form_signin= this.fb.group({
            username: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            password: ['',[Validators.required,Validators.minLength(10)]],
        });
    }


  	get f()

  	{
    return this.form_signin.controls;
  	}


    login() {


        if (this.form_signin.invalid) {
            return;
        }

        var formData: any = new FormData();
    	formData.append("username", this.form_signin.get('username').value);
    	formData.append("password", this.form_signin.get('password').value);


       	this.authService.postItem('http://localhost:8888/SECURITY-SERVICE/register',formData).subscribe(

        (response) => {
             Swal.fire( {icon: 'success',
                    title: 'Good job !',
                    text: 'You are logged in !',
                    showConfirmButton: false
  
                 });
        
           // localStorage.setItem('token', ...]);

        },(error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.status.toString()+" : "+error.statusText});
        });

    }

    
}
