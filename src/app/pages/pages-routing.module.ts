import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FiltroComponent } from './filtro/filtro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'search', component: BuscarComponent
      },
      {
        path: 'about/:name', component: AcercaComponent
      },
      {
        path: 'filter', component: FiltroComponent
      },
      {
        path: '**', redirectTo: 'search'
      }
    ]
  }
];
  

  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
