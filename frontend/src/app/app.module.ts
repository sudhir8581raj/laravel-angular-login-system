import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './@public/navbar/navbar.component';
import { LoginComponent } from './@public/login/login.component';
import { RequestResetComponent } from './@public/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './@public/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './@public/profile/profile.component';
import { SignupComponent } from './@public/signup/signup.component';
import { UserService } from './@services/user/user.service';
import { TokenService } from './@services/Token/token.service';
import { AuthService } from './@services/auth/auth.service';
import { AfterLoginService } from './@services/middleware/after-login.service';
import { BeforeLoginService } from './@services/middleware/before-login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
