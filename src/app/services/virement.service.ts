import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})

export class VirementService {

  //url du backend
  host:string="http://localhost:8888/COMPTE-SERVICE";
  constructor(private http: HttpClient, private userService: UserService) { }

    getSolde(){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.token);
      return this.http.get(this.host+"/solde/"+this.userService.userAuthenticated.id,{
        headers:headers     
      });
    }

    getCompte(){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.token);
      return this.http.get(this.host+"/compte/"+this.userService.userAuthenticated.id,{
        headers:headers     
      });
    }

    relever(){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.token);
      return this.http.get(this.host+"/relever/"+this.userService.userAuthenticated.id,{
        headers:headers     
      });
    }

    virement(formData:FormData){
      let headers = new HttpHeaders()
      .append('Authorization',this.userService.token);
      
      return this.http.post( this.host+"/virement", formData,{
        headers:headers     
      } );

    }


}
