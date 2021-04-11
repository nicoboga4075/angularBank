import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

form_signin:FormGroup;

    constructor(private fb:FormBuilder, private authService:AuthService, private router: Router) {

        this.form_signin= this.fb.group({
            username: '',
            password:'',
        });
    }


    login() {

        const formValue = this.form_signin.value;

        const body=JSON.stringify(formValue);

 		this.authService.postItem('http://localhost:8083/login',body).subscribe(
        token=> { 

        Swal.fire( {icon: 'success',
                    title: 'Bienvenue',
                    text: 'Connexion réussie',
  
                 });

        this.router.navigate(['/dashboard']);

 		localStorage.setItem('token', token['token']);

        },

        response => {Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: JSON.stringify(response.error.error)});
         
        }

        );

    }

    
}
