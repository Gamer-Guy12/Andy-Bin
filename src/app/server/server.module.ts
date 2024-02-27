import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerHomeComponent } from './server-home/server-home.component';
import { ServerListingComponent } from './server-listing/server-listing.component';



@NgModule({
  declarations: [
    ServerHomeComponent,
    ServerListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServerHomeComponent
  ]
})
export class ServerModule { }
