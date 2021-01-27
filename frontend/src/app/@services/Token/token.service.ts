import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss:any = {
    login : "http://127.0.0.1:8000/api/login",
    signup : "http://127.0.0.1:8000/api/signup"
  }
  constructor() { }
  handleToken(token:any){
    this.setToken(token);
    
  }

  setToken(token:any){
    localStorage.setItem("_token",token);
  }
  get(){
    return localStorage._token;
  }
  remove(){
    localStorage.removeItem('_token');
  }
  isValid(){
    const token = this.get();
    
    if(token)
    {
      const payload = this.payload(token);
     // console.log(payload);
      if(payload)
      {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
      
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return JSON.parse(this.decode(payload));
  }

  decode(payload){
    return atob(payload);
  }

  loggedIn(){
    return this.isValid();
  }
}
