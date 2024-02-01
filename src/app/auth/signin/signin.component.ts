import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  email: string = ""
  password: string = ""
  auth = inject(Auth)
  router = inject(Router)

  async signIn() {
    await this.auth.signOut()
    await signInWithEmailAndPassword(this.auth, this.email, this.password)

    this.router.navigate(["auth"])
  }

  navigate() {
    this.router.navigate(["auth/signup"])
  }
}
