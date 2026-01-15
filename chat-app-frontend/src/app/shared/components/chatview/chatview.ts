import { Component, inject, Signal, signal } from '@angular/core';
import { Chat } from '../../classes/Chat';
import { ChatService } from '../../services/chat-service';

@Component({
  selector: 'app-chatview',
  imports: [],
  templateUrl: './chatview.html',
  styleUrl: './chatview.scss',
})
export class Chatview {

  protected newChat = signal<Chat>(new Chat());
  
  protected cs: ChatService = inject(ChatService);
  readonly chats: Signal<Chat[]> = this.cs.chats;



  sendMessage(): void {
    console.log("sende " + this.newChat().name + " mit der Nachricht: " + this.newChat().message);
    this.cs.postMessage(this.newChat());
  }

  updateName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.newChat.update(u => ({ ...u, name: value }));
  }

  updateMessage(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.newChat.update(u => ({ ...u, message: value }));
  }
}
