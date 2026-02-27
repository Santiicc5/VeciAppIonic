import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.page.html',
  styleUrls: ['./mantenimiento.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FullCalendarModule],
})
export class MantenimientoPage {
  constructor(private router: Router, private toastCtrl: ToastController) {}

  // ✅ Opciones del calendario
  calendarOptions: any = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    firstDay: 1, // lunes
    height: 'auto',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: ''
    },

    // Eventos de ejemplo (incidencias)
    events: [
      { title: 'Fuga de agua', date: '2026-03-05' },
      { title: 'Bombilla fundida', date: '2026-03-12' },
      { title: 'Revisión ascensor', date: '2026-03-18' },
    ],

    dateClick: async (info: any) => {
      const toast = await this.toastCtrl.create({
        message: `Crear incidencia el ${info.dateStr}`,
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();

      // Si quieres que al click te lleve a /nueva-incidencia:
      // this.router.navigateByUrl('/nueva-incidencia');
    },

    eventClick: async (info: any) => {
      const toast = await this.toastCtrl.create({
        message: `Incidencia: ${info.event.title}`,
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
    },
  };

  goNuevaIncidencia() {
    this.router.navigateByUrl('/nueva-incidencia');
  }

  goAlertaFuga() {
    this.router.navigateByUrl('/alertas1');
  }

  goAlertaBombilla() {
    this.router.navigateByUrl('/alertas2');
  }
}