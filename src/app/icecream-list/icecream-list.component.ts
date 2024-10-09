import { Component } from '@angular/core';
import {Icecream} from "../Shared/Modules/icecream";
import {IcecreamListItemComponent} from "../icecream-list-item/icecream-list-item.component";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-icecream-list',
  standalone: true,
  imports: [
    IcecreamListItemComponent,
    NgStyle,
    NgForOf
  ],
  templateUrl: './icecream-list.component.html',
  styleUrl: './icecream-list.component.css'
})
export class IcecreamListComponent {

  displayedColumns:string[]= ['id', 'flavour', 'brand', 'price', 'toppings'];
  IcecreamList: Icecream[] = [];
  selectedIcecream: any;

}
