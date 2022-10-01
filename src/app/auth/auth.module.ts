import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgottenPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }