import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  auth = inject(Auth)
  router = inject(Router)

  constructor() {
    if (!this.auth.currentUser) {
      this.router.navigate(["auth"])
    }
  }
}
