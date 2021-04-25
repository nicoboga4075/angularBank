import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { VirementService  } from '../../services/virement.service';

@Component({
    selector: 'virement-cmp',
    moduleId: module.id,
    templateUrl: 'virement.component.html'
})

export class VirementComponent implements OnInit{


 	items:any;

	loaded:boolean;

	virementForm:FormGroup;

	constructor(private formBuilder: FormBuilder, private virementService : VirementService,private router:Router){}


    ngOnInit(){

    this.getVirements();
    this.initForm();

    }


    getVirements(){

   // this.loaded=false;

    this.loaded=true;


    }

    get f()

  	{
    	return this.virementForm.controls;
  	}


  	GetNow()


  	{

  		var maintenant=new Date();
		var jour=(maintenant.getDate()).toString();
		var mois=(maintenant.getMonth()+1).toString();
		if (mois.length==1)
		{mois="0"+mois.toString();}
		var an=maintenant.getFullYear().toString();

		return an+"-"+mois+"-"+jour;



  	}


    initForm()

    {
		var date_init=this.GetNow();


		this.virementForm = this.formBuilder.group({
	  type:['',[this.OneValidator]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      question:['',[this.QuestionValidator, Validators.minLength(10)]],
      response:['',[Validators.required,Validators.minLength(5)]],
      montant:['',[Validators.required,Validators.pattern("^[0-9]+\\.[0-9]{2}$"),this.MoneyValidator]],
      date:[date_init,[this.DateValidator]],


    });


    let date_picker=(<HTMLInputElement>document.getElementById('date'));

  
    var max=(new Date(date_init)).getTime()+12*2629800000;

    var date_max=new Date(max);
	var jour_max=(date_max.getDate()).toString();
	var mois_max=(date_max.getMonth()+1).toString();
	if (mois_max.length==1)
		{ mois_max="0"+mois_max.toString();	}
	var an_max=date_max.getFullYear().toString();

	date_picker.max=an_max+"-"+mois_max+"-"+jour_max;

   

    }



    MoneyValidator(control:AbstractControl) {
 		 	if (control.value=="0.00") 
 		 	{
    			return {"money":true};
  			}
  	
  			return null;

  	}


  	OneValidator(control:AbstractControl) {

  			if (control.value.length==0)

  			{
 				return {"empty":true};

  			}

  			return null;

  	}

  	QuestionValidator(control:AbstractControl) { 

  			if ((!control.value.endsWith("?")) || (control.value.charAt(0)!=control.value.charAt(0).toUpperCase()))

  			{
  				return {"nomark":true};

  			}

  			return null;

  	}


  	DateValidator(control:AbstractControl)

  	{ 	
  		let vir_picker=(<HTMLInputElement>document.getElementById('type'));
  		

  		if (vir_picker.value!="immediat")

  		{

  		let date_picker=(<HTMLInputElement>document.getElementById('date'));

    	var date1=new Date(date_picker.min);

    	var date2=new Date(control.value);

    	var date3=new Date(date_picker.max);


  		var maintenant=new Date();
		var jour=(maintenant.getDate()).toString();
		var mois=(maintenant.getMonth()+1).toString();
		if (mois.length==1)
		{mois="0"+mois.toString();}
		var an=maintenant.getFullYear().toString();
		var now=an+"-"+mois+"-"+jour;

		if (control.value==now || date1.getTime()>date2.getTime() || date2.getTime()>date3.getTime())

		{ return {"small":true};}

		return null;

		}


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

	setDate()

	{	

	
	let date_picker=(<HTMLInputElement>document.getElementById('date'));

	var div_h2 = document.getElementById("hidden2");

	if (this.virementForm.value['type']=="programme")

	{	
		var maintenant=new Date();
		var jour=(maintenant.getDate()+1).toString();
		var mois=(maintenant.getMonth()+1).toString();
		if (mois.length==1)
		{mois="0"+mois.toString();}
		var an=maintenant.getFullYear().toString();

		var date_min=an+"-"+mois+"-"+jour;

		date_picker.min=date_min;
			
		if (div_h2.style.display === "none") { div_h2.style.display = "flex";} 
		
		else { div_h2.style.display="flex";}

	}

	if (this.virementForm.value['type']=="immediat")

	{ 

		this.virementForm.value['date']=this.GetNow();

		div_h2.style.display="none";
		
	}

	
	}


	submitPossible()

	{ let sub_picker=(<HTMLInputElement>document.getElementById('submit'));
	  let vir_picker=(<HTMLInputElement>document.getElementById('type'));


	if (!this.virementForm.invalid || (vir_picker.value=="immediat" && this.virementForm.controls.email.status=="VALID" && this.virementForm.controls.montant.status=="VALID" && this.virementForm.controls.question.status=="VALID" && this.virementForm.controls.response.status=="VALID"))

	  { sub_picker.disabled=false;}

	else { sub_picker.disabled=true;}


	}


	onSubmitForm()

	{	
		if (!this.virementForm.invalid)

		{ return ;}
		
        const formValue = this.virementForm.value;
        

        formValue['montant']=Number.parseFloat(formValue['montant']);
        formValue['date']=new Date(formValue['date']);


        var formData: any = new FormData();
    	formData.append("type", this.virementForm.get('type').value);
    	formData.append("email", this.virementForm.get('email').value);
    	formData.append("question", this.virementForm.get('question').value);
    	formData.append("response", this.virementForm.get('response').value);
    	formData.append("montant", this.virementForm.get('montant').value);
    	formData.append("date", this.virementForm.get('date').value);



  		this.virementService.postItem('http://localhost:8888/COMPTE-SERVICE/virement',formData).subscribe(

        (response) => {
             Swal.fire( {icon: 'success',
                    title: 'Good job !',
                    text: 'Virement Done',
                    showConfirmButton: false
  
                 });


        },(error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.status.toString()+" : "+error.statusText});
        });



	}
      
}
