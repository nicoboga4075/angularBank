import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      
    }
  )
};


@Injectable({
  providedIn: 'root'
})

export class VirementService {

  constructor(private http: HttpClient) { }

  postItem(url:string,body:string){
    return this.http.post(url,body,httpOptions);
  }


}
