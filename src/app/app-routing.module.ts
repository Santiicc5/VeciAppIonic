import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  // ✅ Chat tipo WhatsApp/Telegram: /chat/comunidad, /chat/escalera1, etc.
  {
    path: 'chat/:name',
    loadComponent: () =>
      import('./chat/chat.page').then((m) => m.ChatPage),
  },
{
  path: 'mantenimiento',
  loadComponent: () =>
    import('./mantenimiento/mantenimiento.page').then((m) => m.MantenimientoPage),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}