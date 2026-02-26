import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

type FileItem = { name: string };

@Component({
  selector: 'app-docs-folder',
  templateUrl: './docs-folder.page.html',
  styleUrls: ['./docs-folder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DocsFolderPage {
  title = 'Carpeta';
  files: FileItem[] = [];

  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.paramMap.get('name') || 'Carpeta';
    this.title = name;

    // Mock de archivos por carpeta (luego lo podéis conectar a Firebase/API)
    const data: Record<string, FileItem[]> = {
      Economía: [
        { name: 'Presupuesto anual 2024.pdf' },
        { name: 'Balance de cuotas 2023.pdf' },
        { name: 'Gastos mensuales enero 2024.xls' },
        { name: 'Informe de morosidad.pdf' },
        { name: 'Cuotas de vecinos.pdf' },
      ],
      Normativa: [
        { name: 'Normas convivencia.pdf' },
        { name: 'Reglamento piscina.pdf' },
      ],
      Seguros: [
        { name: 'Seguro comunidad.pdf' },
        { name: 'Partes y siniestros.pdf' },
      ],
    };

    this.files = data[name] ?? [
      { name: 'Documento 1.pdf' },
      { name: 'Documento 2.pdf' },
    ];
  }

  iconFor(fileName: string) {
    const f = fileName.toLowerCase();
    if (f.endsWith('.pdf')) return 'document-text-outline';
    if (f.endsWith('.xls') || f.endsWith('.xlsx')) return 'stats-chart-outline';
    if (f.endsWith('.doc') || f.endsWith('.docx')) return 'reader-outline';
    return 'document-outline';
  }
}