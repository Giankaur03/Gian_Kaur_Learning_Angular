import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Icecream} from "./Shared/Modules/icecream";
import {JsonPipe, NgForOf} from "@angular/common";
import {IcecreamListComponent} from "./icecream-list/icecream-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, IcecreamListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Icecream';
}
