import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {
  value = ""

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((router) => {
      this.value = router.get("id") as string
    })
  }
}
