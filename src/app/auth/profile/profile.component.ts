import { Component, inject } from '@angular/core';
import { Auth, updateProfile, updateEmail, updatePassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  auth = inject(Auth)
  router = inject(Router)
  username = ""
  email = ""
  password = ""
  confirmPassword = ""

  signIn() {
    this.router.navigate(["auth", "signin"])
  }

  signUp() {
    this.router.navigate(["auth", "signup"])
  }

  async update() {
    if (!this.auth.currentUser) {
      alert("Please be signed in")
      return
    }

    if (this.username.replace(" ", "") !== "") {
      await updateProfile(this.auth.currentUser, { displayName: this.username })
    }

    if (this.email.replace(" ", "") !== "") {
      await updateEmail(this.auth.currentUser, this.email)
    }

    if (this.password.replace(" ", "") !== "" && this.password === this.confirmPassword) {
      await updatePassword(this.auth.currentUser, this.password)
    }

    this.router.navigate(["auth"])
  }
}
