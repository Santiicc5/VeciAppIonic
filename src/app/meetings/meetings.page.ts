import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

type VoteOption = { id: number; label: string; votes: number };

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.page.html',
  styleUrls: ['./meetings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MeetingsPage {
  convocatoria = 'Próxima 20 de diciembre';

  question = 'Cambiar puerta del portal?';
  options: VoteOption[] = [
    { id: 1, label: 'Sí', votes: 14 },
    { id: 2, label: 'No', votes: 6 },
  ];

  selectedId: number | null = 1;

  anteriores = [
    { title: 'Cambio compañía luz', result: 'Sí' },
  ];

  select(id: number) {
    this.selectedId = id;
  }
}