import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  form_signin:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService, private router: Router) {

        this.form_signin= this.fb.group({
            email: '',
            password:'',
        });
    }


   login() {

        const formValue = this.form_signin.value;


      	const body=JSON.stringify(formValue);


   }




}

