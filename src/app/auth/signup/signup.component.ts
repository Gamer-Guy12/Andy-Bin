import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  email = ""
  password = ""
  confirmPassword = ""
  username = ""
  auth = inject(Auth)
  router = inject(Router)

  async signUp () {
    if (this.email.replace(" ", "") === "") {
      alert("Email must be filled in.")
      return
    }

    if (this.password.replace(" ", "") === "") {
      alert("Password must be filled in.")
      return
    }

    if (this.password !== this.confirmPassword) {
      alert("Your passwords must patch.")
      return
    }

    if (this.username.replace(" ", "") === "") {
      alert("Username must be filled in.")
      return
    }

    await createUserWithEmailAndPassword(this.auth, this.email, this.password)

    if (!this.auth.currentUser)
      return

    await updateProfile(this.auth.currentUser, { displayName: this.username })

    this.router.navigate([""])
  }
}
