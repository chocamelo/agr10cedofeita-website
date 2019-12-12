import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './home/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FullCalendarModule } from 'ng-fullcalendar';
import { AgmCoreModule } from '@agm/core';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LobitosComponent } from './seccoes/lobitos/lobitos.component';
import { ExploradoresComponent } from './seccoes/exploradores/exploradores.component';
import { PioneirosComponent } from './seccoes/pioneiros/pioneiros.component';
import { CaminheirosComponent } from './seccoes/caminheiros/caminheiros.component';
import { FullMenuTemplateComponent } from './templates/full-menu-template/full-menu-template.component';
import { EmptyTemplateComponent } from './templates/empty-template/empty-template.component';
import { SeccoesComponent } from './seccoes/seccoes.component';
import { AgrupamentoComponent } from './agrupamento/agrupamento.component';
import { HistoriaComponent } from './agrupamento/historia/historia.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { EventosComponent } from './eventos/eventos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactosComponent } from './contactos/contactos.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlbumComponent } from './galeria/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LobitosComponent,
    ExploradoresComponent,
    PioneirosComponent,
    CaminheirosComponent,
    FullMenuTemplateComponent,
    EmptyTemplateComponent,
    SeccoesComponent,
    AgrupamentoComponent,
    HistoriaComponent,
    DocumentosComponent,
    EventosComponent,
    GaleriaComponent,
    ContactosComponent,
    AlbumComponent
    ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    //FullCalendarModule,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhU16QpVXnD21uY4ErU1mwuX-P39ljQfU'
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
