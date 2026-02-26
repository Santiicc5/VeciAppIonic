import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Gráfico 1: gastos por mes
    const gastosCanvas = document.getElementById('gastosChart') as HTMLCanvasElement;
    if (gastosCanvas) {
      new Chart(gastosCanvas, {
        type: 'bar',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
          datasets: [
            { label: '€ Gastos', data: [320, 280, 450, 390, 500, 410] }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }

    // Gráfico 2: cuotas pagadas vs pendientes
    const cuotasCanvas = document.getElementById('cuotasChart') as HTMLCanvasElement;
    if (cuotasCanvas) {
      new Chart(cuotasCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Pagadas', 'Pendientes'],
          datasets: [
            { label: 'Cuotas', data: [18, 6] }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  }

  goPago() {
    this.router.navigateByUrl('/pago');
  }

  goPresupuesto() {
    this.router.navigateByUrl('/presupuesto');
  }
}