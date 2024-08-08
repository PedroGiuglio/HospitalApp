import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ExcelServicioService } from 'src/app/excel-servicio.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {
@ViewChild('arrowIcon') arrowIcon!: ElementRef;
@ViewChild('arrowIconPrev') arrowIconPrev!: ElementRef;
constructor(private service:SharedService,  private excel:ExcelServicioService){}


ProfesionalList:any[]=[];
currentPage: number = 1;
pageSize: number = 10;
searchTerm: string = '';

ngOnInit():void{
  this.refreshProList();
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


ModalTitle:string = "";
ActivateAddEditPacComp:boolean = false;
pro:any="";

  refreshProList():void{
    this.service.getProList().subscribe(prueba=>{
      this.ProfesionalList=prueba;
      console.log("progamo", this.ProfesionalList);
    });
  }

  addClick(){
    this.pro={
      IdTrabajador:0,
      nombre:"",
      apellido:"",
      tipoProfesional:0,
    }
    this.ModalTitle="Add profesional";
    this.ActivateAddEditPacComp=true;   
  }

  closeClick(){
    this.ActivateAddEditPacComp=false;
    this.refreshProList();
  }


  editClick(item:any){
    this.pro=item;
    this.ModalTitle = "Edit pacienteww";
    this.ActivateAddEditPacComp=true;
  }

  deleteProfesional(item:any){
    if(confirm('Estas seguro de eliminar?')){
      this.service.deleteProfesional(item.IdTrabajador).subscribe(data=>{
        alert(data.toString());
        this.refreshProList();
      })
    }
  }
  exportExcel(): void {
    console.log(this.ProfesionalList)
    this.excel.exportToExcel(this.ProfesionalList, 'lista-profesionales');
  }
}
