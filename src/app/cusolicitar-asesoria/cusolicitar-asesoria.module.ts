import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CUSolicitarAsesoriaPage } from './cusolicitar-asesoria.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CUSolicitarAsesoriaPage
      }
    ])
  ],
  declarations: [CUSolicitarAsesoriaPage]
})
export class CUSolicitarAsesoriaPageModule {}

