import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:50294/api"
  readonly PhotoUrl = "http://localhost:50294/Photos/"

  constructor(private http:HttpClient) { }

  getPacList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Paciente')
  }

  addPaciente(val:any){
    return this.http.post(this.APIUrl+'/Paciente',val)
  }

  updatePaciente(val:any){
    return this.http.put(this.APIUrl+'/Paciente',val)
  }

  //metodo delete donde pasamos id por url
  deletePaciente(val:any){
    return this.http.delete(this.APIUrl+'/Paciente/'+val)
  }

  GetAllCategorias():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Recursos/GetAllCategorias')
  }

  //METODOS API REST PARA CONTROLLER DE PROFESIONALES //

  getProList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Profesional')
  }

  deleteProfesional(val:any){
    return this.http.delete(this.APIUrl+'/Profesional/'+val)
  }

  filtroPaciente(nombre: string, apellido: string, turnoArea: number) {
    const params = {
      nombre: nombre || '',
      apellido: apellido || '',
      turnoArea: turnoArea.toString() || '0',
    };
  
    return this.http.get<any[]>(`${this.APIUrl}/Paciente/Search`, { params });
  }

  //METODOS API PARA CONTROLLER TURNOS

  getTurnosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Turnos')
  }

  addTurno(val:any){
    return this.http.post(this.APIUrl+'/Turnos/',val)
  }

  updateTurno(val:any){
    return this.http.put(this.APIUrl+'/Turnos/',val)
  }

  deleteTurno(val:any){
    return this.http.delete(this.APIUrl+'/Turnos/'+val)
  }

}
