import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { isPossiblePhoneNumber, isValidPhoneNumber, parsePhoneNumber,formatPhoneNumberIntl} from 'react-phone-number-input';
import { ActivatedRoute} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
	
	item={'prenom':'Mister','nom':'Software','telephone':'+33674128956','email':'ms@gmail.com'};

	id:number;

	form_profile:FormGroup;

    constructor(private fb:FormBuilder, private userService:UserService, private router: Router, private route: ActivatedRoute) {

     this.form_profile= this.fb.group({
          	prenom: '',
          	nom: ['',[Validators.required,Validators.minLength(2),Validators.pattern("[A-Z][a-z]+")]],
          	telephone :['',[Validators.required]],
          	email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        });
    }


  	get f()

  	{
    return this.form_profile.controls;
  	}


  	valid_phone(input:String)

  	{ if (isValidPhoneNumber(formatPhoneNumberIntl(input)))

  		{ return true;}

  	  return false;

  	}


    ngOnInit(){


    }
}
