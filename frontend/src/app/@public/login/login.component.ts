import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form:any = {
    email : null,
    password : null
  };
  public error: any = null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post('http://127.0.0.1:8000/api/auth/login',this.form).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      this.handleError(error);
    });
  }
  handleError(error){
    this.error = error.error.error;
  }

}
