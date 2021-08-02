import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginFormRoutingModule
  ]
})
export class LoginFormModule { }
