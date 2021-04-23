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

export class AuthService {

  constructor(private http: HttpClient) { }

   getItem(url: string) {
    return this.http.get(url, httpOptions);
  }

  postItem(url:string,body:string){
    return this.http.post(url,body,httpOptions);
  }

}
