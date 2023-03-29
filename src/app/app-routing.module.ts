import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { PizarraComponent } from './pizarra/pizarra.component';

const routes: Routes = [
  { path: '', component: PizarraComponent },
  { path: 'listar_tareas', component: ListarTareasComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
