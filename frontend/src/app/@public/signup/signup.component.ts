import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form:any = {
    name : null,
    email : null,
    password : null,
    password_confirmation : null
  };
  public error: any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post('http://127.0.0.1:8000/api/signup',this.form).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error)
      this.handleError(error);
    });
  }
  handleError(error){
    this.error = error.error.errors;
  }

}
