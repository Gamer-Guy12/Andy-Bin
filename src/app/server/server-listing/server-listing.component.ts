import { Component, Input } from '@angular/core';

interface Item {
  name: string,
  public: boolean,
  users: string[]
}

@Component({
  selector: 'app-server-listing',
  templateUrl: './server-listing.component.html',
  styleUrl: './server-listing.component.scss'
})
export class ServerListingComponent {
  @Input({required: true}) server!: Item
}
