import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerHomeComponent } from './server-home/server-home.component';
import { ServerListingComponent } from './server-listing/server-listing.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    ServerHomeComponent,
    ServerListingComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServerHomeComponent,
    ServerComponent
  ]
})
export class ServerModule { }
