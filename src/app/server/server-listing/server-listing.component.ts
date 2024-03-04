import { Component, Input, inject } from '@angular/core';
import { IServer } from '../iserver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-listing',
  templateUrl: './server-listing.component.html',
  styleUrl: './server-listing.component.scss'
})
export class ServerListingComponent {
  @Input({required: true}) server!: IServer
  router = inject(Router)

  click() {
    this.router.navigate(["server", this.server.id])
  }
}
