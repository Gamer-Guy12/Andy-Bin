import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthHomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    AuthHomeComponent,
    ProfileComponent
  ]
})
export class AuthModule { }
