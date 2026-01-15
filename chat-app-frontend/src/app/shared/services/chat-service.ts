import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../classes/Chat';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

    private readonly apiUrl = 'http://localhost:8000/api/chat/';
    readonly chats = toSignal(
        timer(0, 3000).pipe(
            switchMap(() => this.http.get<Chat[]>(this.apiUrl))
        ),
        { initialValue: [] }
    );

    constructor(private http: HttpClient) { 
    }

    postMessage(newChat: Chat) {
      return this.http.post('http://localhost:8000/api/chat/', {
        name: newChat.name,
        message: newChat.message
      });
    }
}
