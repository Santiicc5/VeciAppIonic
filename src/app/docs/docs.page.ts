import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

type Folder = { name: string };
type Doc = { title: string; chevron?: boolean };

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DocsPage {
  constructor(private router: Router) {}

  folders: Folder[] = [
    { name: 'Economía' },
    { name: 'Normativa' },
    { name: 'Seguros' },
    { name: 'Estatutos' },
    { name: 'Contratos' },
    { name: 'Proveedores' },
    { name: 'Mantenimiento' },
    { name: 'Revisiones' },
  ];

  actas: Doc[] = [
    { title: 'Acta Junta Ordinaria 15/03/2024' },
    { title: 'Acta Junta Ordinaria 20/03/2023' },
    { title: 'Acta Junta Ordinaria\naprobación de cuentas 2022', chevron: true },
  ];

  openFolder(name: string) {
    this.router.navigate(['/docs-folder', name]);
  }
}