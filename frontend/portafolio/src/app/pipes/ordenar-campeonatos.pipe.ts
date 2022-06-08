import { Pipe, PipeTransform } from '@angular/core';
import { Escuderia } from '../modelos/api.model';

@Pipe({
  name: 'ordenarCampeonatos'
})
export class OrdenarCampeonatosPipe implements PipeTransform {

  transform(array: any[], args: string): any {
     array.sort((a: any, b: any)=>{        
        return (b[args] - a[args]);        
      });      
      return array;
     
  }


  // transform<T>(array: Array<T>, args: string): Array<T> {
  //   return array.sort((a: any, b: any) => {
  //     if (a[args].toLowerCase() < b[args].toLowerCase()) {
  //       return -1;
  //     } else if (a[args] > b[args]) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

}
