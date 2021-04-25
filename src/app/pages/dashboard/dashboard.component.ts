import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  
    id:number;
    solde:number;
    loaded:boolean;

    constructor(private fb:FormBuilder,private route: ActivatedRoute, private dashboardService:DashboardService, private router: Router) {}

    ngOnInit(){

    this.route.paramMap.subscribe(params => {

        this.id = +params.get('id');

        this.loaded = false;
        
        this.dashboardService.getItem('http://localhost:8888/COMPTE-SERVICE/solde/'+this.id).subscribe(
         (response) => { 

         console.log(response);

         this.loaded=true;
            

        },(error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.status.toString()+" : "+error.statusText});
        });


    });

    }

     
}
