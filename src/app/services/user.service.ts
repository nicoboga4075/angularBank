import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //url du backend
  host:string="http://localhost:8888/SECURITY-SERVICE";
 

  //savoir si le user est authentifié
  isAuthenticated:boolean=false;
  //pour stocker le user enregistré
  userAuthenticated:any;
  //pour enregistrer le token de jwt
  token:string;
  //pour stocker les roles du users
  roles:Array<any>;

  constructor(private http:HttpClient){

  }

  //effectue toute requete get
  getRessource(url:string){
    let headers = new HttpHeaders()
    .append('Authorization',this.token);
     return this.http.get(this.host+url,{
      headers:headers     
    });
  }

  //pour creer un compte
  //:Observable<HttpEvent<{}>>
  register(formData:FormData) {
    //const req= new HttpRequest("POST",this.host+"register",formData);
    //return this.http.request(req);
    let headers = new HttpHeaders()
    .append('Authorization',this.token);
    
    return this.http.post( this.host+"/register", formData,{
      headers:headers     
    } );
  }

  update(formData:FormData) {
    
    let headers = new HttpHeaders()
    .append('Authorization',this.token);
    
    return this.http.patch( this.host+"/updateUser", formData,{
      headers:headers     
    } );
  }

  delete(id){
    let headers = new HttpHeaders()
    .append('Authorization',this.token);
    return this.http.delete(this.host+"/deleteUser/"+id,{headers:headers});
  }

  //pour s'authentifier
  login(user){
    /*j'utilise observe car par defaut la requete retourne la reponse sous format json 
       et spring security ne retourne pas un objet json et en plus j'ai besoin de la reponse en entier 
       pour extraire le token de l'entete
    */
    return this.http.post(this.host+"/login",user,{observe:"response"});
    
  }


  //enregistrer dans le local storage le token 
  saveToken(token){
     this.token=token; 
      localStorage.setItem("token",token);
      //installation de jwt avant angular 6 "npm install angular-jwt --save et aussi npm install @auth0/angular-jwt v1 --save"
      let jwtHelper = new JwtHelperService();
      let decodedToken = jwtHelper.decodeToken(token);
      this.roles=decodedToken.roles;
      //console.log(this.roles);
      //recuperer le user a partir du login
      let login=decodedToken.sub;
      this.getUser(login);
           
  }

  getUser(login:string){
    this.http.get(this.host+"/getUser?email="+login).subscribe(data=>{
      this.userAuthenticated=data;
      //console.log(this.userAuthenticated); 
    },
      error=>console.log(error));
  }


  //savoir si le user authentifié est un admin
  isAdmin():boolean{
    if(this.userAuthenticated){
      
    }else ;
    return true;
  }

  getRole(){
    return this.roles[0].authority;
  }

  //cette methode permet de recuperer le token dans le local storage afin de le mettre dans les entetes des requetes et eviter qu'il se reconnecte à nouveau
  //et doit etre appelé au demarrage de l'application soit dans le onInit de AppComponent
  loadToken(){
    this.token=localStorage.getItem("token");
    if(this.token!=null){
      let jwtHelper= new JwtHelperService();
      let decodedToken = jwtHelper.decodeToken(this.token);
      this.roles=decodedToken.roles;
      let login=decodedToken.sub;
      //console.log(login);
      this.isAuthenticated=true;
      this.getUser(login);
      
    }
    
  }

  //pour la deconnexion
  removeTokenFromLocalStorage(){
    localStorage.removeItem("token");
    this.userAuthenticated=undefined;
    this.isAuthenticated=false;
    this.token=undefined;
  }

}
