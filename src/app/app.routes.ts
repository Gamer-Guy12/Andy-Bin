import { Routes } from '@angular/router';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
  {
    path: "auth/signin",
    component: SigninComponent,
    title: "Andy Bin: Sign In"
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
