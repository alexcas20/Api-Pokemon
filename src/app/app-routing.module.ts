import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
 {
  path: 'home' , component: InicioComponent
 },
  {
    path: 'pages', 
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
