import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { VirementService } from 'app/services/virement.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    solde:any;
    loaded:boolean;

    constructor(private fb:FormBuilder, private userService:UserService,private compteService:VirementService,  private router: Router) {}

    ngOnInit(){
        this.loaded=false;
        this.compteService.getSolde().subscribe(resp=>{   
            this.solde=resp;
            this.loaded=true;
        },error=>{
            
        });
    }

     
}
