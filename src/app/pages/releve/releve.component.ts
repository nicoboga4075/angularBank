import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UserService } from 'app/services/user.service';

@Component({
    selector: 'releve-cmp',
    moduleId: module.id,
    templateUrl: 'releve.component.html'
})

export class ReleveComponent implements OnInit{

	loaded:boolean;

	constructor(private formBuilder: FormBuilder,  private userService : UserService,private router:Router){}

    ngOnInit(){




    }

}