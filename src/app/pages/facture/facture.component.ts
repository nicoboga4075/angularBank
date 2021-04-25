import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FactureService  } from '../../services/facture.service';


@Component({
    selector: 'facture-cmp',
    moduleId: module.id,
    templateUrl: 'facture.component.html',

})

export class FactureComponent implements OnInit{

	id:number;

	loaded:boolean;

	factureForm:FormGroup;

	constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, private factureService : FactureService, private router:Router){}


    ngOnInit(){

    this.route.paramMap.subscribe(params => {

        this.id = +params.get('id');

        this.initForm();

        this.loaded = false;
        
        this.factureService.getItem('http://localhost:8888/BILLING-SERVICE/full/'+this.id).subscribe(
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



    get f()

  	{
    	return this.factureForm.controls;
  	}


    initForm()

    {

		this.factureForm = this.formBuilder.group({
      
      		email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      		montant:['',[Validators.required,Validators.pattern("^[0-9]+\\.[0-9]{2}$"),this.MoneyValidator]],
      		date:[null,[this.DateValidator]],

    });

    let date_picker=(<HTMLInputElement>document.getElementById('date'));

	var maintenant=new Date();
	var jour=(maintenant.getDate()+1).toString();
	var mois=(maintenant.getMonth()+1).toString();
	if (mois.length==1)
		{mois="0"+mois.toString();}
	var an=maintenant.getFullYear().toString();

	date_picker.min=an+"-"+mois+"-"+jour;

	var max=(new Date(date_picker.min)).getTime()+3*2629800000;

	var date_max=new Date(max);
	var jour_max=(date_max.getDate()).toString();
	var mois_max=(date_max.getMonth()+1).toString();
	if (mois_max.length==1)
		{ mois_max="0"+mois_max.toString();	}
	var an_max=date_max.getFullYear().toString();

	date_picker.max=an_max+"-"+mois_max+"-"+jour_max;

	

    }

    DateValidator(control:AbstractControl)

    {  let date_picker=(<HTMLInputElement>document.getElementById('date'));

    	var date1=new Date(date_picker.min);

    	var date2=new Date(control.value);

    	var date3=new Date(date_picker.max);

    	if ((date1.getTime()>date2.getTime())||(date2.getTime()>date3.getTime()))

    	{ return {"small":true};}

    	return null;

    }

    MoneyValidator(control: AbstractControl) {
 		 	if (control.value=="0.00") 
 		 	{
    			return {"money":true};
  			}
  	
  			return null;

  	}

  	

    
	add() { 


  		var div_h = document.getElementById("hidden");
  		var div_s = document.getElementById("shown");

  		if (div_h.style.display === "none") {
    		div_h.style.display = "block";
    		div_s.style.display = "none";
		} 
		else {
    			div_h.style.display = "none";
    			div_s.style.display = "block";
  
  			}

	}

	submitPossible()

	{ let sub_picker=(<HTMLInputElement>document.getElementById('submit'));


	if (!this.factureForm.invalid)

	  { sub_picker.disabled=false;}

	else { sub_picker.disabled=true;}


	}
	

	onSubmitForm()

	{		

        const formValue = this.factureForm.value;

        formValue['montant']=Number.parseFloat(formValue['montant']);
        formValue['date']=new Date(formValue['date']);

		var formData: any = new FormData();
    	formData.append("email", this.factureForm.get('email').value);
    	formData.append("montant", this.factureForm.get('montant').value);
    	formData.append("date", this.factureForm.get('date').value);


    	this.factureService.postItem('http://localhost:8888/BILLING-SERVICE/create',formData).subscribe(

        (response) => {
             Swal.fire( {icon: 'success',
                    title: 'Good job !',
                    text: 'Facture created !',
                    showConfirmButton: false
  
                 });
        
           console.log(response);

        },(error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.status.toString()+" : "+error.statusText});
        });

	}
      
}
