import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './@public/navbar/navbar.component';
import { LoginComponent } from './@public/login/login.component';
import { SingupComponent } from './@public/singup/singup.component';
import { RequestResetComponent } from './@public/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './@public/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './@public/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
