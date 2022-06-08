import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Edad'
})
export class PipeApiPipe implements PipeTransform {

  transform(date: Date ,): Number {
    const convertAge = new Date(date);
    const diferencia = Math.abs(Date.now() - convertAge.getTime());
    const edad = Math.floor((diferencia / (1000 * 3600 * 24))/365);
      return edad;
     
  }

}
