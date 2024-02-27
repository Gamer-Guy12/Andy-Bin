import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-server-home',
  templateUrl: './server-home.component.html',
  styleUrl: './server-home.component.scss'
})
export class ServerHomeComponent {
  firestore = inject(Firestore)
}
