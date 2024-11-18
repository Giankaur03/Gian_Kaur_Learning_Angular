import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {IcecreamList} from "../Shared/Modules/mock-icecream";
import {ActivatedRoute, Router} from "@angular/router";
import {IceCreamService} from "../Services/IcecreamService";

@Component({
  selector: 'app-modify-icecream',
  standalone: true,
  imports: [
    ReactiveFormsModule
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

  onSubmit() {

  }

  navigateToIcecreamList() {
    this.router.navigate(['/icecream'])

  }

  ngOnInit(): void {
  }
}
