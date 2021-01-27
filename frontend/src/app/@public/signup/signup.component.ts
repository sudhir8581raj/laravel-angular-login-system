import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/@services/Token/token.service';
import { UserService } from '../../@services/user/user.service';
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
  constructor(
    private service:UserService,
    private Token:TokenService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.signup(this.form).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

  handleData(data){
    this.Token.handleToken(data.access_token);
    if(this.Token.loggedIn())
    {
      this.router.navigateByUrl('/profile');
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }
  handleError(error:any){
    this.error = error.error.errors;
  }

}
