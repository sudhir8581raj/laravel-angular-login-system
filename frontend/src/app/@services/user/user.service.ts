import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http:HttpClient) { }

  public login(data:any){
    return this.http.post(this.baseUrl+"login",data);
  }

  public signup(data:any){
    return this.http.post(this.baseUrl+"signup",data);
  }
}
