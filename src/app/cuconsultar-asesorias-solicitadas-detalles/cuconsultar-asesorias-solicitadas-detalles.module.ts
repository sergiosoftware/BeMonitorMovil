import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuconsultarAsesoriasSolicitadasDetallesPage } from './cuconsultar-asesorias-solicitadas-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: CuconsultarAsesoriasSolicitadasDetallesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuconsultarAsesoriasSolicitadasDetallesPage]
})
export class CuconsultarAsesoriasSolicitadasDetallesPageModule {}
