import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  {path: 'Tareas', component: TareasComponent},
  {path: 'Notas', component: NotasComponent},
  {path: '**', pathMatch: 'full', redirectTo:'Tareas'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
