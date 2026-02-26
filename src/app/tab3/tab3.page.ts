import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page {
  constructor(private router: Router) {}

  goPago() {
    this.router.navigateByUrl('/pago');
  }
  goPresupuesto() {
  this.router.navigateByUrl('/presupuesto');
}
}