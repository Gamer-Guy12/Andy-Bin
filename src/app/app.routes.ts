import { Routes } from '@angular/router';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ServerHomeComponent } from './server/server-home/server-home.component';

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
      },
      {
        path: "",
        component: AuthHomeComponent,
        title: "Andy Bin: Auth"
      },
      {
        path: "profile",
        component: ProfileComponent,
        title: "Andy Bin: Profile"
      }
    ]
  },
  {
    path: "",
    redirectTo: "auth/signin",
    pathMatch: "full"
  },
  {
    path: "server",
    children: [
      {
        path: "",
        title: "Andy Bin: Servers",
        component: ServerHomeComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "Andy Bin: Not Found"
  }
];
