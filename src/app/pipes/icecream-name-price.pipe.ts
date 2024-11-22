import { Pipe, PipeTransform } from '@angular/core';
import {Icecream} from "../Shared/Modules/icecream";

@Pipe({
  name: 'icecreamNamePrice',
  standalone: true
})
export class IcecreamNamePricePipe implements PipeTransform {

  transform(icecream: Icecream): string {
    return `${icecream.id} ${icecream.flavour}`
  }

}
