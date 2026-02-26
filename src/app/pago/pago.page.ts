import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PagoPage {
  constructor(private router: Router) {}

  goPago2() {
    this.router.navigateByUrl('/pago2');
  }
}