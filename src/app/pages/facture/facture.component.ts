import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

	now="2021-04-17";

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
      montant:['',[Validators.required,Validators.pattern("^([+-]?\\d*\\.?\\d*)$")]],
      date:null,

    });

    let date_picker=(<HTMLInputElement>document.getElementById('date'));

	var maintenant=new Date();
	var jour=(maintenant.getDate()+1).toString();
	var mois=(maintenant.getMonth()+1).toString();
	if (mois.length==1)
		{mois="0"+mois.toString();}
	
	var an=maintenant.getFullYear().toString();

	date_picker.min=an+"-"+mois+"-"+jour;


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

        console.log(formValue);

        const body=JSON.stringify(formValue);

  		console.log(body);

	}
      
}
