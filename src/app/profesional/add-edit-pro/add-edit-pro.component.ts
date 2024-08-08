import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-pro',
  templateUrl: './add-edit-pro.component.html',
  styleUrls: ['./add-edit-pro.component.css']
})
export class AddEditProComponent {



  @Input() pro:any;
  @Input() ProfesionalList:any[]=[];
  selectedCategoriaId: number = 0;
}
