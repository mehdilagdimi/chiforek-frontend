import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSubstractor'
})
export class DateSubstractorPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    var dDate = value[0].split('-');
    console.log(" val date ", value)
    var depDate = new Date(Number(dDate[0]), Number(dDate[1]) - 1, Number(dDate[2]));
    console.log(" val date after date() ", depDate)
    var aDate = value[1].split('-');
    var arrivDate = new Date(Number(aDate[0]), Number(aDate[1]) - 1, Number(aDate[2]));

    var diff = Math.abs(arrivDate.getTime() - depDate.getTime());
    console.log(" resut " + Math.ceil(diff / (1000 * 3600 * 24)))
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

}
