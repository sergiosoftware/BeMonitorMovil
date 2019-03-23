import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CUSolicitarAsesoriaPage } from './cusolicitar-asesoria.page';

const routes: Routes = [
  {
    path: '',
    component: CUSolicitarAsesoriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    File,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CUSolicitarAsesoriaPage]
})
export class CUSolicitarAsesoriaPageModule {

}
