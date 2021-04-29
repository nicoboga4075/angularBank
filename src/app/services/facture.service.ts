import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})

export class FactureService {

    //url du backend
    //host:string="http://localhost:8888/BILLING-SERVICE";
    host:string="http://localhost:8082";
    constructor(private http: HttpClient, private userService: UserService) { }
  

  getBill(id){

    let headers = new HttpHeaders()
    .append('Authorization',this.userService.getToken());
    return this.http.get(this.host+"/bills/full/"+id,{
      headers:headers     
    });

  
  }
    
   supprimer(id){

    let headers = new HttpHeaders()
    .append('Authorization',this.userService.getToken());
    return this.http.delete(this.host+"/bills/supprimer/"+id,{headers:headers});

       
  }

   
    getcreatedBills() {

      let headers = new HttpHeaders()
      .append('Authorization',this.userService.getToken());
      return this.http.get(this.host+"/getCreatedBills/"+this.userService.getAuthenticatedUser().id,{
        headers:headers     
      });

       
    }

   
   getReceivedBills(){
    console.log(this.host+"/getReceivedBills/"+this.userService.getAuthenticatedUser().id);
    let headers = new HttpHeaders()
    .append('Authorization',this.userService.getToken());
    return this.http.get(this.host+"/getReceivedBills/"+this.userService.getAuthenticatedUser().id,{
      headers:headers     
    });

    

    }

    PayBill(id){

      let headers = new HttpHeaders()
      .append('Authorization',this.userService.getToken());
      return this.http.get(this.host+"/payBill/"+id,{
        headers:headers     
      });
  

    }



   create(formData){

    let headers = new HttpHeaders()
    .append('Authorization',this.userService.getToken());
    
    return this.http.post( this.host+"/create", formData,{
      headers:headers     
    } );

  }
}
