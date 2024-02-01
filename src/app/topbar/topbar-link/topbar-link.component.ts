import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar-link',
  templateUrl: './topbar-link.component.html',
  styleUrl: './topbar-link.component.scss'
})
export class TopbarLinkComponent {
  @Input("name") name!: String
  @Input("to") to!: String
  router: Router = inject(Router)

  getName(): String {
    return `../../../assets/${this.name}`
  }

  navigate() {
    this.router.navigate([this.to])
  }
}
