import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  // ✅ Chat tipo WhatsApp/Telegram: /chat/comunidad, /chat/escalera1, etc.
  {
    path: 'chat/:name',
    loadComponent: () => import('./chat/chat.page').then((m) => m.ChatPage),
  },

  // ✅ Juntas y votaciones
  {
    path: 'meetings',
    loadComponent: () => import('./meetings/meetings.page').then((m) => m.MeetingsPage),
  },

  // ✅ Mantenimiento
  {
    path: 'mantenimiento',
    loadComponent: () =>
      import('./mantenimiento/mantenimiento.page').then((m) => m.MantenimientoPage),
  },
<<<<<<< HEAD
=======
  {
  path: 'docs',
  loadComponent: () =>
    import('./docs/docs.page').then((m) => m.DocsPage),
},
 {
  path: 'nueva-incidencia',
  loadComponent: () =>
    import('./nueva-incidencia/nueva-incidencia.page').then((m) => m.NuevaIncidenciaPage),
},
 {
  path: 'alertas1',
  loadComponent: () =>
    import('./alertas1/alertas1.page').then((m) => m.Alertas1Page),
},
 {
  path: 'alertas2',
  loadComponent: () =>
    import('./alertas2/alertas2.page').then((m) => m.Alertas2Page),
},


>>>>>>> e01f6c155ea5369f1d4beb799328a7e93fb4c725

  // ✅ Documentos
  {
    path: 'docs',
    loadComponent: () => import('./docs/docs.page').then((m) => m.DocsPage),
  },

  // ✅ Carpeta de documentos (Economía, Normativa, etc.)
  {
    path: 'docs-folder/:name',
    loadComponent: () =>
      import('./docs-folder/docs-folder.page').then((m) => m.DocsFolderPage),
  },

  // ✅ Nueva incidencia
  {
    path: 'nueva-incidencia',
    loadComponent: () =>
      import('./nueva-incidencia/nueva-incidencia.page').then((m) => m.NuevaIncidenciaPage),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}