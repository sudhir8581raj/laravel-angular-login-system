import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './@public/navbar/navbar.component';
import { LoginComponent } from './@public/login/login.component';
import { SingupComponent } from './@public/singup/singup.component';
import { RequestResetComponent } from './@public/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './@public/password/response-reset/response-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
