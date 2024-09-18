import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Books} from "./Shared/Modules/books";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Books';

  book1 : Books = {id: 1, bookName: "The Shining", author: "Stephen King", releaseDate: 1977, category: "Horror", availability: false};
  book2 : Books = {id: 2, bookName: "Pride and Prejudice", author: "Jane Austen", releaseDate: 1813, category: "Classic Romance", availability: true};
  book3 : Books = {id: 3, bookName: "1984", author: "George Orwell", releaseDate: 1949, category: "Dystopian Fiction", availability: true};

  bookList: Books[] =
    [this.book1,this.book2,this.book3,
      {id: 4, bookName: "The Great Gatsby", author: "F. Scott Fitzgerald", releaseDate: 1925, category: "Classic Literature", availability: false},
      {id: 5, bookName: "The Haunting of Hill House", author: "Shirley Jackson", releaseDate: 1959, category: "Horror", availability:true},
      {id: 6, bookName: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", releaseDate: 2005, category: "Mystery/Thriller", availability:true}
    ]

  toggleAvailabilityStatus(user: Books): void {
    user.availability = !user.availability;
  }
}
