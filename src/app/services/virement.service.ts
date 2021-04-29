import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})

export class VirementService {

  //url du backend
  //host:string="http://localhost:8888/COMPTE-SERVICE";
  host:string="http://localhost:8081";
  constructor(private http: HttpClient, private userService: UserService) { }

    getSolde(){
      
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.getToken());
      return this.http.get(this.host+"/solde/"+this.userService.getAuthenticatedUser().compteId,{
        headers:headers     
      });
    }

    getCompte(){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.getToken());
      return this.http.get(this.host+"/compte/"+this.userService.getAuthenticatedUser().compteId,{
        headers:headers     
      });
    }

    relever(){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.getToken());
      return this.http.get(this.host+"/relever/"+this.userService.getAuthenticatedUser().compteId,{
        headers:headers     
      });
    }

    virement(formData:FormData){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.getToken());
      
      return this.http.post( this.host+"/virement", formData,{
        headers:headers     
      } );

    }


}
