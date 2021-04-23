import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ReleveService  } from '../../services/releve.service';

@Component({
    selector: 'releve-cmp',
    moduleId: module.id,
    templateUrl: 'releve.component.html'
})

export class ReleveComponent implements OnInit{

	loaded:boolean;

	releventForm:FormGroup;


    ngOnInit(){}
    

	constructor(private formBuilder: FormBuilder, private releveService : ReleveService,private router:Router){}

	}