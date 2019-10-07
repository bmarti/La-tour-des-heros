import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages : String[] = [];

  ajout(message: String) {
    this.messages.push(message);
  }

  vider() {
    this.messages = [];
  }
}
