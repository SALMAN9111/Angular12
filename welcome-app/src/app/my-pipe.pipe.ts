import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, city: string): string {
    if(city == "New York")
      return "City: "+city;
    return "City: NY"
  }

}
