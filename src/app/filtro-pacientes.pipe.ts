import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPacientes'
})
export class FiltroPacientesPipe implements PipeTransform {

  // transform(items: any[], searchTerm: string): any[] {
  //   if (!items || !searchTerm) {
  //     return items;
  //   }

  //   searchTerm = searchTerm.toLowerCase();

  //   return items.filter(item =>
  //     (item.nombre && item.nombre.toLowerCase().includes(searchTerm)) ||
  //     (item.apellido && item.apellido.toLowerCase().includes(searchTerm)) ||
  //     (item.turnoArea && item.turnoArea.toString().includes(searchTerm))
  //   );
  transform(items: any[], term: string): any[] {
    if (!items || !term) {
      return items;
    }

    return items.filter(item => item.nombre.toLowerCase().includes(term.toLowerCase()));
  }

}
