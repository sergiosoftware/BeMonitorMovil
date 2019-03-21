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
  { path: 'cusolicitar-asesoria', loadChildren: './cusolicitar-asesoria/cusolicitar-asesoria.module#CUSolicitarAsesoriaPageModule' },
  { path: 'archivo', loadChildren: './archivo/archivo.module#ArchivoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
