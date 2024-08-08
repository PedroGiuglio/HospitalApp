import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observer, forkJoin } from 'rxjs';
import { ExcelServicioService } from 'src/app/excel-servicio.service';
import { FiltroPacientesPipe } from 'src/app/filtro-pacientes.pipe';
import { ImageService } from 'src/app/image.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pac',
  templateUrl: './show-pac.component.html',
  styleUrls: ['./show-pac.component.css'],
  host: { 'class': 'tu-clase-componente' } // Agrega esta línea
})

export class ShowPacComponent implements OnInit {
  @ViewChild('arrowIcon') arrowIcon!: ElementRef;
  @ViewChild('arrowIconPrev') arrowIconPrev!: ElementRef; 

  constructor(private service:SharedService, filtroPacientesPipe:FiltroPacientesPipe, private excel:ExcelServicioService, private cdr: ChangeDetectorRef, private imageService:ImageService){}

  PacientesList:any[] = [];
  CategoriasList:any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  searchTerm: string = '';
  PacientesListOriginal:any[]=[];


  ngOnInit():void {
    this.refreshPacList(); 
    this.refreshCatList();  
  }

get startIndex(): number {
  return (this.currentPage - 1) * this.pageSize;
}

get endIndex(): number {
  return this.startIndex + this.pageSize;
}

nextPage() {
  this.currentPage++;


  this.arrowIconPrev.nativeElement.disabled = false;
}

prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

//Propiedades Modales//

  ModalTitle:string = "";
  ActivateAddEditPacComp:boolean = false;
  pac:any="";


  addClick(){
    this.pac={
      IdPaciente:0,
      nombre:"",
      apellido:"",
      turnoArea:0,
      historiaPaciente:""
    }
    this.ModalTitle="Add paciente";
    this.ActivateAddEditPacComp=true; 
  }

  closeClick(){
    this.ActivateAddEditPacComp=false;
    this.refreshPacList();
  }

  editClick(item:any){
    this.pac=item;
    this.ModalTitle = "Edit paciente";
    this.ActivateAddEditPacComp=true;
  }

  deletePaciente(item:any){
    if(confirm('Estas seguro de eliminar?')){
      this.service.deletePaciente(item.IdPaciente).subscribe(data=>{
        alert(data.toString());
        console.log(item);
        this.refreshPacList();
      })
    }
  }
  

  //Get lista pacientes y generar user images random//
  refreshPacList() {
    this.service.getPacList().subscribe(data => {
      this.PacientesList = data;

      // Obtener un array de observables para todas las imágenes aleatorias
      const imageObservables = this.PacientesList.map(paciente => this.imageService.getRandomImage());

      // Usar forkJoin para esperar a que todas las llamadas asíncronas se completen
      forkJoin(imageObservables).subscribe((imageBlobs: Blob[]) => {
        // Asignar las URLs de las imágenes a los pacientes
        imageBlobs.forEach((imageBlob, index) => {
          const imageUrl = URL.createObjectURL(imageBlob);
          this.PacientesList[index].imageUrl = imageUrl;
        });

        console.log("Todas las imágenes han sido cargadas");
      });
    });
  }

  refreshCatList(){
    this.service.GetAllCategorias().subscribe(hola=>{
      this.CategoriasList=hola;
      console.log('CategoriasList en el componente padre:', this.CategoriasList);
    })
  }

  IdPaciente:number=0;
  name:string = "";
  apellido:string = "";
  turnoArea:number = 0;
  filterActivated:boolean = false;


  successInsert = false;

//MODAL SUCCESS INSERT //
  mensajeInsert: string = 'dddd';

  onInsertRealizado() {
    this.mensajeInsert = 'Insert realizado con éxito';
      // Forzar la actualización de la vista
    this.cdr.detectChanges();
    console.log("insert correcto");
    console.log(this.mensajeInsert)
  }


  filtroClick(){
    this.PacientesListOriginal = this.PacientesList.filter(item => item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  historiaClinicaSeleccionada: string = '';
  abrirModal(historiaClinica:string):void{
    this.historiaClinicaSeleccionada = historiaClinica;
    console.log(historiaClinica);
  }

  exportExcel(): void {
    console.log(this.PacientesList)
    this.excel.exportToExcel(this.PacientesList, 'lista-pacientes');
  }

  randomImageUrl:string="";

  lastInsertedIdDelHijo: number | undefined;

  recibirLastInsertedIdDesdeHijo(lastInsertedId: number) {
    this.lastInsertedIdDelHijo = lastInsertedId;
    console.log(`Last Inserted ID recibido en el padre: ${this.lastInsertedIdDelHijo}`);
  }

}

