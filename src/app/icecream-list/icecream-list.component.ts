import { Component, OnInit } from '@angular/core';
import { Icecream } from "../Shared/Modules/icecream";
import { NgForOf } from "@angular/common";
import { IceCreamService } from "../Services/IcecreamService";
import {IcecreamListItemComponent} from "../icecream-list-item/icecream-list-item.component";

@Component({
  selector: 'app-ice-cream-list',
  standalone: true,
  imports: [
    NgForOf, IcecreamListItemComponent
  ],
  templateUrl: './icecream-list.component.html',
  styleUrls: ['./icecream-list.component.css']
})
export class IceCreamListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'flavour', 'brand', 'price', 'toppings'];
  iceCreamList: Icecream[] = [];
  iceCreamListITem:Icecream[] = []

  constructor(private iceCreamService: IceCreamService) {

  }

  ngOnInit() {

    this.iceCreamService.getIceCreams().subscribe({
      next: (data: Icecream[]) => this.iceCreamList = data,
      error: err => console.error("Error fetching Ice Creams", err),
      complete: () => console.log("Ice Cream data fetch complete!")
    });
  }

  selectedIceCream?: Icecream;
  selectIceCream(iceCream: Icecream): void {
    this.selectedIceCream = iceCream;
  }
}
