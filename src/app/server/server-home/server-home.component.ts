import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, collectionData, or, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
  public: boolean,
  users: string[]
}

@Component({
  selector: 'app-server-home',
  templateUrl: './server-home.component.html',
  styleUrl: './server-home.component.scss'
})
export class ServerHomeComponent {
  firestore = inject(Firestore)
  auth = inject(Auth)
  col = collection(this.firestore, "Servers")
  data!: Observable<Item[]>

  constructor() {
    if (!this.auth.currentUser) return
    let que = query(this.col, or(where("people", "array-contains", this.auth.currentUser.uid), where("people", "array-contains", this.auth.currentUser.uid)))
    this.data = collectionData(que) as Observable<Item[]>
  }
}
