import { Component, OnInit } from '@angular/core';
import { IIceCream } from "../Shared/Modules/icecream";
import { NgForOf } from "@angular/common";
import { IceCreamService } from "../Services/IcecreamService";

@Component({
  selector: 'app-ice-cream-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss']
})
export class IceCreamListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'flavour', 'brand', 'price', 'toppings'];
  iceCreamList: IIceCream[] = []; // Change userList to iceCreamList

  constructor(private iceCreamService: IceCreamService) {

  }

  ngOnInit() {

    this.iceCreamService.getIceCreams().subscribe({
      next: (data: IIceCream[]) => this.iceCreamList = data,
      error: err => console.error("Error fetching Ice Creams", err),
      complete: () => console.log("Ice Cream data fetch complete!")
    });
  }

  selectedIceCream?: IIceCream;
  selectIceCream(iceCream: IIceCream): void {
    this.selectedIceCream = iceCream;
  }
}
