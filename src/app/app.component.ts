import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Icecream} from "./Shared/Modules/icecream";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {IceCreamListComponent} from "./icecream-list/icecream-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, IceCreamListComponent, RouterLink, RouterLinkActive, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Icecream';
  todayDate:string = '2024/11/22';
}
