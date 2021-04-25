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

  getItem(url: string) {
    return this.http.get(url, httpOptions);
  }

  postItem(url:string,formData:FormData){
    return this.http.post(url,formData,httpOptions);
  }


}
