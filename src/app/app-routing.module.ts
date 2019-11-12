import { AlbumComponent } from './galeria/album/album.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CaminheirosComponent } from './seccoes/caminheiros/caminheiros.component';
import { PioneirosComponent } from './seccoes/pioneiros/pioneiros.component';
import { ExploradoresComponent } from './seccoes/exploradores/exploradores.component';
import { LobitosComponent } from './seccoes/lobitos/lobitos.component';
import { SeccoesComponent } from './seccoes/seccoes.component';
import { HistoriaComponent } from './agrupamento/historia/historia.component';
import { AgrupamentoComponent } from './agrupamento/agrupamento.component';
import { FullMenuTemplateComponent } from './templates/full-menu-template/full-menu-template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: FullMenuTemplateComponent,
  data: {
    title: 'Pages'
  },
  children: [
    { path: 'home', component: DashboardComponent },
    { path: 'agrupamento', component: AgrupamentoComponent },
    { path: 'agrupamento/historia', component: HistoriaComponent },
    { path: 'seccoes', component: SeccoesComponent },
    { path: 'seccoes/lobitos', component: LobitosComponent },
    { path: 'seccoes/exploradores', component: ExploradoresComponent },
    { path: 'seccoes/pioneiros', component: PioneirosComponent },
    { path: 'seccoes/caminheiros', component: CaminheirosComponent },
    { path: 'documentos', component: DocumentosComponent },
    { path: 'eventos', component: EventosComponent },
    {
      path: 'galeria', children: [
        { path: '', component: GaleriaComponent },
        { path: '**', component: AlbumComponent },
      ]
    },
    { path: 'contactos', component: ContactosComponent },
    { path: '**', component: NotFoundComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
