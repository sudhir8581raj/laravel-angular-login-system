import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  public authStatus = this.loggedIn.asObservable();

  constructor(
    private Token:TokenService
  ) { }

  changeAuthService(value:boolean){
    this.loggedIn.next(value);
  }
}
