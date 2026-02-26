import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.page.html',
  styleUrls: ['./mantenimiento.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MantenimientoPage {
  constructor(private router: Router) {}

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