import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class Tab2Page {
  query = '';

  chats = [
    { title: 'Comunidad', icon: 'people' },
    { title: 'Escalera 1', icon: 'home', badge: '1' },
    { title: 'Escalera 2', icon: 'home' },
    { title: 'Mantenimiento', icon: 'construct' },
    { title: 'Administrador', icon: 'person-circle' },
    { title: 'Zonas comunes', icon: 'grid' },
    { title: 'Avisos urgentes', icon: 'alert-circle' },
  ];

  get filteredChats() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.chats;
    return this.chats.filter((c) => c.title.toLowerCase().includes(q));
  }
}