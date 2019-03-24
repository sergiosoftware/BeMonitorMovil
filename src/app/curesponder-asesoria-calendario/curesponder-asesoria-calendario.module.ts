import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuresponderAsesoriaCalendarioPage } from './curesponder-asesoria-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: CuresponderAsesoriaCalendarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuresponderAsesoriaCalendarioPage]
})
export class CuresponderAsesoriaCalendarioPageModule {}
