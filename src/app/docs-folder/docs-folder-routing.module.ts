import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsFolderPage } from './docs-folder.page';

const routes: Routes = [
  {
    path: '',
    component: DocsFolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsFolderPageRoutingModule {}
