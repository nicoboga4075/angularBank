import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UserService } from 'app/services/user.service';
import { VirementService } from 'app/services/virement.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'releve-cmp',
    moduleId: module.id,
    templateUrl: 'releve.component.html'
})

export class ReleveComponent implements OnInit{

	loaded:boolean;
   
    compte:any;

	constructor(private formBuilder: FormBuilder,  private compteService:VirementService, private userService : UserService,private router:Router, private datePipe: DatePipe){
        if(this.userService.getAuthenticatedUser()==null){
          this.router.navigate(["/login"]);
        }
    }

    ngOnInit(){
        this.loaded=false;
        this.compteService.relever().subscribe(resp=>{ 

            this.compte=resp;
            this.loaded=true;
            console.log(this.compte); 
        },error=>{
            
        });


    }

}