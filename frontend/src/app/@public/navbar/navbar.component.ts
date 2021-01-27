import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth/auth.service';
import { TokenService } from 'src/app/@services/Token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public checkLogin : boolean;
  constructor(
    private auth:AuthService,
    private token : TokenService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.checkLogin = value);
  }

  logout(event : MouseEvent){
    this.token.remove();
    this.auth.changeAuthService(false);
    this.router.navigateByUrl('/login');
  }



}
