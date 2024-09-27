import { Component } from '@angular/core';
import {Icecream} from "../Shared/Modules/icecream";
import {IcecreamListItemComponent} from "../icecream-list-item/icecream-list-item.component";

@Component({
  selector: 'app-icecream-list',
  standalone: true,
  imports: [
    IcecreamListItemComponent
  ],
  templateUrl: './icecream-list.component.html',
  styleUrl: './icecream-list.component.css'
})
export class IcecreamListComponent {

  displayedColumns:string[]= ['id', 'flavour', 'brand', 'price', 'toppings'];
  IcecreamList: Icecream[] = [
    {id: 1, flavour: "Vanilla", brand: "Breyers", price: 3.00, toppings: false},
    {id: 2, flavour: "Chocolate", brand: "Magnum", price: 4.50, toppings: true},
    {id: 3, flavour: "Cookie and Cream", brand: "Baskin Robins", price: 4.75, toppings: false},
    {id: 4, flavour: "Strawberry", brand: "Blue Bell", price: 3.25, toppings:true}
  ];
  selectedIcecream: any;


}
