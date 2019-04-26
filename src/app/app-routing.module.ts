import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'cusolicitar-asesoria',
    loadChildren: './cusolicitar-asesoria/cusolicitar-asesoria.module#CUSolicitarAsesoriaPageModule'
  },
  {
    path: 'archivo',
    loadChildren: './archivo/archivo.module#ArchivoPageModule'
  },
  {
    path: 'curesponder-asesoria', loadChildren: './curesponder-asesoria/curesponder-asesoria.module#CuresponderAsesoriaPageModule'
  },
  {
    path: 'curesponder-asesoria-calendario', loadChildren: './curesponder-asesoria-calendario/curesponder-asesoria-calendario.module#CuresponderAsesoriaCalendarioPageModule'
  },
  {
    path: 'cuconsultar-asesorias-solicitadas', loadChildren: './cuconsultar-asesorias-solicitadas/cuconsultar-asesorias-solicitadas.module#CuconsultarAsesoriasSolicitadasPageModule'
  },
  {
    path: 'cuconsultar-asesorias-solicitadas-detalles', loadChildren: './cuconsultar-asesorias-solicitadas-detalles/cuconsultar-asesorias-solicitadas-detalles.module#CuconsultarAsesoriasSolicitadasDetallesPageModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
