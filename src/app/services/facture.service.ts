import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
       //  'Authorization':localStorage.getItem('token'),
      
    }
  )
};

@Injectable({
  providedIn: 'root'
})

export class FactureService {

  constructor(private http: HttpClient) { } 

  getBill(id){

  
  }

    
   supprimer(id){

       
  }

   
    getcreatedBills() {

       
    }

   
   getReceivedBills(){

    }

    PayBill(){

    }



   create(){

  }
}
