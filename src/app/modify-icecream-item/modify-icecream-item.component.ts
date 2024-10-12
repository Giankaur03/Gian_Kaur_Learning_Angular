import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-modify-icecream-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-icecream-item.component.html',
  styleUrl: './modify-icecream-item.component.css'
})
export class ModifyIcecreamItemComponent {
  icecreamForm: any;

  onSubmit() {

  }

  onDelete() {

  }

  navigateToIcecreamList() {

  }
}

export class ModifyIcecreamComponent {
}
