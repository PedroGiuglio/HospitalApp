import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ShowPacComponent } from './paciente/show-pac/show-pac.component';
import { AddEditPacComponent } from './paciente/add-edit-pac/add-edit-pac.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfesionalComponent } from './profesional/profesional.component';
import { AddEditProComponent } from './profesional/add-edit-pro/add-edit-pro.component';
import { ShowProComponent } from './profesional/show-pro/show-pro.component';
import { FiltroPacientesPipe } from './filtro-pacientes.pipe';
import { HomeComponent } from './home/home.component';
import { MensajeSuccessComponent } from './mensaje-success/mensaje-success.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ShowTurComponent } from './turnos/show-tur/show-tur.component';
import { AddEditTurComponent } from './turnos/add-edit-tur/add-edit-tur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    ShowPacComponent,
    AddEditPacComponent,
    ProfesionalComponent,
    AddEditProComponent,
    ShowProComponent,
    FiltroPacientesPipe,
    HomeComponent,
    MensajeSuccessComponent,
    TurnosComponent,
    ShowTurComponent,
    AddEditTurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [SharedService,FiltroPacientesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
