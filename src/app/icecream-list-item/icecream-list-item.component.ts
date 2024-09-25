import {Component, Input} from '@angular/core';
import {Icecream} from "../Shared/Modules/icecream";

@Component({
  selector: 'app-icecream-list-item',
  standalone: true,
  imports: [],
  templateUrl: './icecream-list-item.component.html',
  styleUrl: './icecream-list-item.component.css'
})
export class IcecreamListItemComponent {
@Input()
  icecream!: Icecream;

}
