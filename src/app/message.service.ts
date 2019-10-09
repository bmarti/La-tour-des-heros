import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: String[] = [];
  impossible: boolean = false;

  ajout(message: String) {
    this.messages.push(message);
    this.impossible = false;
  }

  vider() {
    this.messages = [];
    this.impossible = true;
  }
}
