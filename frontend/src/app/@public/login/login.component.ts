import { Component, OnInit } from '@angular/core';
import { UserService } from '../../@services/user/user.service';
import {TokenService} from '../../@services/Token/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth/auth.service';
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
  constructor(
    private service:UserService,
    private Token:TokenService,
    private router:Router,
    private auth:AuthService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.login(this.form).subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }
  handleData(data:any){
    this.Token.handleToken(data.access_token);
    if(this.Token.loggedIn())
    {
      this.auth.changeAuthService(true);
      this.router.navigateByUrl('/profile');
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }
  handleError(error:any){
    this.error = error.error.error;
  }

  

}
