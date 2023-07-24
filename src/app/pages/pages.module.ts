import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { AcercaComponent } from './acerca/acerca.component';
import { FiltroComponent } from './filtro/filtro.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    BuscarComponent,
    AcercaComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
