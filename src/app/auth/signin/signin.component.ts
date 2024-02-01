import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  email: string = ""
  password: string = ""
  auth = inject(Auth)

  signIn() {
    alert("click")
    signInWithEmailAndPassword(this.auth, this.email, this.password)
  }
}
