import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente/paciente.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfesionalComponent } from './profesional/profesional.component';
import { HomeComponent } from './home/home.component';
import { TurnosComponent } from './turnos/turnos.component';


const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'paciente',component:PacienteComponent},
  {path:'profesional',component:ProfesionalComponent},
  {path:'turnos',component:TurnosComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
