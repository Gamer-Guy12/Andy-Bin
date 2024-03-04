import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, addDoc, collection, collectionData, or, query, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IServer } from '../iserver';

@Component({
  selector: 'app-server-home',
  templateUrl: './server-home.component.html',
  styleUrl: './server-home.component.scss'
})
export class ServerHomeComponent {
  firestore = inject(Firestore)
  auth = inject(Auth)
  router = inject(Router)
  col = collection(this.firestore, "server")
  data: Observable<IServer[]>
 
  title = ""
  public = false

  constructor() {
    if (!this.auth.currentUser) {
      this.router.navigate(["auth"])
    }
    if (!this.auth.currentUser) throw Error("Not signed in")
    let que = query(this.col, or(where("public", "==", true), where("users", 'array-contains', this.auth.currentUser.uid))) 
    this.data = collectionData(que, {idField: "id"}) as Observable<IServer[]>
  }

  swapPublic() {
    this.public = !this.public
  }

  async createServer() {
    if (this.title === "") {
      alert("server must have a name")
      return
    }
    let doc = await addDoc(this.col, { name: this.title, public: this.public, users: [this.auth.currentUser?.uid] })
    this.public = false
    this.title = ""
    this.router.navigate(["server", doc.id])
  }

}
