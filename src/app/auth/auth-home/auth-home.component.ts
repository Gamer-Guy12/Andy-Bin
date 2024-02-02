import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.scss'
})
export class AuthHomeComponent {
  auth = inject(Auth)
  router = inject(Router)

  signIn() {
    this.router.navigate(["auth/signin"])
  }

  signUp() {
    this.router.navigate(["auth/signup"])
  }

  async signOut() {
    await this.auth.signOut()
  }
}
