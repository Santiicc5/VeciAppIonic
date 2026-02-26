import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsFolderPageRoutingModule } from './docs-folder-routing.module';

import { DocsFolderPage } from './docs-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsFolderPageRoutingModule
  ],
  declarations: [DocsFolderPage]
})
export class DocsFolderPageModule {}
