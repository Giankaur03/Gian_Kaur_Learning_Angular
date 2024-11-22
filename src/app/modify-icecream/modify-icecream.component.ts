import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {IcecreamList} from "../Shared/Modules/mock-icecream";
import {ActivatedRoute, Router} from "@angular/router";
import {IceCreamService} from "../Services/IcecreamService";
import {Icecream} from "../Shared/Modules/icecream";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-modify-icecream',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-icecream.component.html',
  styleUrl: './modify-icecream.component.css'
})
export class ModifyIcecreamComponent implements OnInit{
  IcecreamList: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private icecreamService: IceCreamService,
    private router: Router
  ) {
    this.IcecreamList = this.fb.group({
      id:[''],
      flavour: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      toppings: [false]
    });
  }

  onSubmit(): void {
    const icecream: Icecream = this.IcecreamList.value;

    console.log(icecream.id)
    if (icecream.id) {
      this.icecreamService.updateIceCream(icecream);
    } else {

      icecream.id = this.icecreamService.generateNewId();
      this.icecreamService.addIceCream(icecream);
    }

    this.router.navigate(['/icecream']);
  }

  onDelete(): void {
    const id = this.IcecreamList.get('id')?.value;
    if (id) {
      this.icecreamService.deleteIceCream(id);
      this.router.navigate(['/icecream']);
    }
  }
  navigateToIcecreamList() {
    this.router.navigate(['/icecream'])

  }

  ngOnInit(): void {
  }
}
