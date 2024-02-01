import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { TopbarLinkComponent } from './topbar-link/topbar-link.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TopbarComponent,
    TopbarLinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
