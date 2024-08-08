import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pac',
  templateUrl: './add-edit-pac.component.html',
  styleUrls: ['./add-edit-pac.component.css']
})
export class AddEditPacComponent implements OnInit{
  constructor(private service:SharedService){}


  @Input() pac:any;
  @Input() CategoriasList:any[]=[];
  @Input() categoria:any;
  @Output() lastInsertIdEvent = new EventEmitter<number>();
  selectedCategoriaId: number = 0;


  

  ngOnChanges(changes: SimpleChanges) {
    console.log('CategoriasList en el componente hijo:', this.CategoriasList);
  }


  IdPaciente:string="";
  nombre:string="";
  apellido:string="";
  turnoArea:number=0;
  historiaPaciente:string="";
  ActivateAddEditPacComp:boolean = false;
  ModalActivado:boolean=false;
  botonDeshabilitado: boolean = false;

  probando:string="dddee";


  ngOnInit():void{
    this.IdPaciente=this.pac.IdPaciente;
    this.nombre=this.pac.nombre;
    this.apellido=this.pac.apellido;
    this.turnoArea=this.pac.turnoArea;
    this.historiaPaciente=this.pac.historiaPaciente;
  }

 lastInsertedId:number=0;
 lastInsert:any=0;

  addPaciente(){
    var val= {IdPaciente:this.IdPaciente,
            nombre:this.nombre,
            apellido:this.apellido,
            turnoArea:this.selectedCategoriaId,
            historiaPaciente:this.historiaPaciente}
            this.service.addPaciente(val).subscribe(res=>{
              if ('LastInsertedId' in res) {
                // Accede al lastInsertedId desde la respuesta
                const lastInsertedId = res.LastInsertedId;
                this.lastInsert=lastInsertedId;
                this.lastInsertIdEvent.emit(this.lastInsert)
                console.log(`Last Inserted ID: ${lastInsertedId}`);
              } else {
                console.error('La propiedad LastInsertedId no está presente en la respuesta.');
              }
            });
            this.botonDeshabilitado=true;
            this.ModalActivado=true;
            setTimeout(() => {
              this.IdPaciente = "";
              this.nombre = "";
              this.apellido = "";
              this.selectedCategoriaId = 0; // o el valor predeterminado que necesites
              this.historiaPaciente = "";
              this.ocultarMensajeExito();
              this.botonDeshabilitado=false;
            }, 3000);
            this.ActivateAddEditPacComp = false;
  }

  ocultarMensajeExito() {
    this.ModalActivado = false;
  }

  updatePaciente(){
    var val= {IdPaciente:this.IdPaciente,
      nombre:this.nombre,
      apellido:this.apellido,
      turnoArea:this.selectedCategoriaId,
      historiaPaciente:this.historiaPaciente}
      this.service.updatePaciente(val).subscribe(res=>{
        alert(res.toString());
      });
  }


}
