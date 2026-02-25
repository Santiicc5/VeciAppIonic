import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

type Msg = { user: string; text: string; mine?: boolean; color?: 'red' | 'green' };

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ChatPage {
  title = 'Chat';
  input = '';

  messages: Msg[] = [
    { user: 'Jose', text: 'Hola, buenas', color: 'red' },
    { user: 'Yo', text: 'Ostras joder', mine: true },
    { user: 'Santiago', text: 'Ostia joder', color: 'green' },
  ];

  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.paramMap.get('name');
    this.title = name ? this.cap(name) : 'Chat';
  }

  send() {
    const t = this.input.trim();
    if (!t) return;
    this.messages.push({ user: 'Yo', text: t, mine: true });
    this.input = '';
  }

  private cap(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}