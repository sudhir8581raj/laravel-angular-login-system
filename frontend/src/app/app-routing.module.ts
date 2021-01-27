import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@public/login/login.component';
import { RequestResetComponent } from './@public/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './@public/password/response-reset/response-reset.component';
import { ProfileComponent } from './@public/profile/profile.component';
import { SignupComponent } from './@public/signup/signup.component';
import { AfterLoginService } from './@services/middleware/after-login.service';
import { BeforeLoginService } from './@services/middleware/before-login.service';


const appRoutes:Routes = [
  {
    path : "login",
    component : LoginComponent,
    canActivate :  [BeforeLoginService]
  },
  {
    path : "signup",
    component : SignupComponent,
    canActivate : [BeforeLoginService]
  },
  {
    path: "profile",
    component : ProfileComponent,
    canActivate : [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component : RequestResetComponent
  },
  {
    path : 'response-password-reset',
    component : ResponseResetComponent
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }



