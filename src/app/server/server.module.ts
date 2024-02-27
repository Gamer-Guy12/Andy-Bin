import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerHomeComponent } from './server-home/server-home.component';



@NgModule({
  declarations: [
    ServerHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServerHomeComponent
  ]
})
export class ServerModule { }
