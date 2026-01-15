import { Component, OnInit, signal } from '@angular/core';
import { Chat } from '../../shared/classes/Chat';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landingpage',
  imports: [],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage implements OnInit {

  chats = signal<Chat[]>([]);
  newChat = signal<Chat>(new Chat());

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<Chat[]>('http://localhost:8000/api/chat/')
    .subscribe(data => {
      this.chats.set(data);
    });
  }

  async sendMessage(): Promise<void> {
    console.log("sende " + this.newChat().name + " mit der Nachricht: " + this.newChat().message);

    this.http.post('http://localhost:8000/api/chat/', {
      name: this.newChat().name,
      message: this.newChat().message
    }).subscribe(response => {
      console.log(response);
    });
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
