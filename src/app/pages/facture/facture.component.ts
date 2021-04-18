import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
    selector: 'facture-cmp',
    moduleId: module.id,
    templateUrl: 'facture.component.html',

})

export class FactureComponent implements OnInit{

	items:any;

	loaded:boolean;

	factureForm:FormGroup;

	constructor(private formBuilder: FormBuilder, private router:Router){}


    ngOnInit(){

    this.getFactures();
    this.initForm();
    }


    getFactures(){

   // this.loaded=false;

    this.loaded=true;


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

	

	onSubmitForm()

	{		
		if (this.factureForm.invalid) {
            return;
        }

        const formValue = this.factureForm.value;


        formValue['montant']=Number.parseFloat(formValue['montant']);
        formValue['date']=new Date(formValue['date']);


        const body=JSON.stringify(formValue);

  		console.log(body);

	}
      
}
