import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuresponderAsesoriaPage } from './curesponder-asesoria.page';

const routes: Routes = [
  {
    path: '',
    component: CuresponderAsesoriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuresponderAsesoriaPage]
})
export class CuresponderAsesoriaPageModule {}
