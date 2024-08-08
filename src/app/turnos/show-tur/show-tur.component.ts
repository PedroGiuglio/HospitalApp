import { Component } from '@angular/core';
import * as moment from 'moment'; // Import moment library
import { SharedService } from 'src/app/shared.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-show-tur',
  templateUrl: './show-tur.component.html',
  styleUrls: ['./show-tur.component.css']
})
export class ShowTurComponent {

constructor(private service:SharedService){}

  ModalTitle="Hola";

  ngOnInit():void{
    this.getTurnos();
    this.getCategorias();
  }

  items: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
  selectedItem: string = '';
  selectedCategoria:string = '';

  ListTurnos:any[]=[];
  ListCategorias:any[]=[];

  getTurnos(){
    this.service.getTurnosList().subscribe(data=>{
      this.ListTurnos=data;
      console.log(this.ListTurnos)
    })
  }

  getCategorias(){
    this.service.GetAllCategorias().subscribe(data=>{
      this.ListCategorias=data;
      console.log(this.ListCategorias)
    })
  }


  closeClick(){
    this.getTurnos();
    this.getCategorias();
  }

  minDate = new Date(2023, 9, 1); // Rango mínimo: 1 de enero de 2023
  maxDate = new Date(2023, 11, 31);

  fechaSeleccionada: any | null = null;

  onDateInput(event: MatDatepickerInputEvent<Date>): void {
    this.fechaSeleccionada = event.value;
    console.log(this.fechaSeleccionada);
   // Utiliza toISOString para obtener la representación de cadena en formato ISO 8601
  const fechaCompleta = this.fechaSeleccionada.toISOString().split("T")[0];
  console.log(fechaCompleta);
  }

  guardarFecha(): void {
    if (this.fechaSeleccionada) {
      // Aquí puedes realizar acciones adicionales con la fecha seleccionada
      console.log('Guardando fecha:', this.fechaSeleccionada);
    } else {
      console.log('No se ha seleccionado ninguna fecha.');
    }
  }

  botonGuardar(){
    this.guardarFecha();
  }

  IdPaciente:number=0;
  IdProfesional:number=0;
  Dia:string="";
  Horario:string=this.fechaSeleccionada;


  addTurno(){
    var val = {
    IdPaciente:this.IdPaciente,
    IdProfesional:this.IdProfesional,
    Dia:this.Dia,
    Horario:this.Horario
    }
  }
}
