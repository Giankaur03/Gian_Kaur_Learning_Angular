import {Component, Input} from '@angular/core';
import {Icecream} from "../Shared/Modules/icecream";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-icecream-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './icecream-list-item.component.html',
  styleUrl: './icecream-list-item.component.css'
})
export class IcecreamListItemComponent {
@Input() icecream?: Icecream;
}
