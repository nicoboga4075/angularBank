import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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

	id:number;

	constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private releveService : ReleveService,private router:Router){}

    ngOnInit(){


    this.route.paramMap.subscribe(params => {

        this.id = +params.get('id');

        this.loaded = false;
        this.releveService.getItem('http://localhost:8888/COMPTE-SERVICE/relever/'+this.id).subscribe(
         (response) => { console.log(response);
            

        },(error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.status.toString()+" : "+error.statusText});
        });


    });

    }

}