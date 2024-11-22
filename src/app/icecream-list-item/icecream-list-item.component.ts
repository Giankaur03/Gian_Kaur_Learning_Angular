import {Component, Input} from '@angular/core';
import {Icecream} from "../Shared/Modules/icecream";
import {CurrencyPipe, NgIf, UpperCasePipe} from "@angular/common";
import {IcecreamNamePricePipe} from "../pipes/icecream-name-price.pipe";

@Component({
  selector: 'app-icecream-list-item',
  standalone: true,
  imports: [
    NgIf,
    UpperCasePipe,
    CurrencyPipe,
    IcecreamNamePricePipe
  ],
  templateUrl: './icecream-list-item.component.html',
  styleUrl: './icecream-list-item.component.css'
})
export class IcecreamListItemComponent {
@Input() icecream?: Icecream;
}
