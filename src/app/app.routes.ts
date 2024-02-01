import { Routes } from '@angular/router';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {
    path: "auth",
    children: [
      {
        path: "signin",
        component: SigninComponent,
        title: "Andy Bin: Sign In"
      },
      {
        path: "signup",
        component: SignupComponent,
        title: "Andy Bin: Sign Up"
      }
    ]
  },
  {
    path: "",
    redirectTo: "auth/signin",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Andy Bin: Not Found"
  }
];
