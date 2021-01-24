import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@public/login/login.component';
import { RequestResetComponent } from './@public/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './@public/password/response-reset/response-reset.component';
import { ProfileComponent } from './@public/profile/profile.component';
import { SingupComponent } from './@public/singup/singup.component';

const appRoutes:Routes = [
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : SingupComponent
  },
  {
    path: "profile",
    component : ProfileComponent
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



