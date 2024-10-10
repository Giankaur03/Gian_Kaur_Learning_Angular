import { Injectable } from '@angular/core';
import { IcecreamList } from "../Shared/Modules/mock-icecream";
import { Observable, of } from 'rxjs';
import { Icecream } from "../Shared/Modules/icecream";

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  private iceCreams: Icecream[] = IcecreamList; // Local copy of ice cream data for CRUD operations

  constructor() { }

  // Returns all ice creams
  getIceCreams(): Observable<Icecream[]> {
    return of(this.iceCreams); // Return an observable that emits the ice cream data
  }

  // Create: Add Ice Cream
  addIceCream(newIceCream: Icecream): Observable<Icecream[]> {
    this.iceCreams.push(newIceCream);
    return of(this.iceCreams);
  }

  // Update an existing ice cream
  updateIceCream(updatedIceCream: Icecream): Observable<Icecream[]> {
    const index = this.iceCreams.findIndex(iceCream => iceCream.id === updatedIceCream.id);
    if (index !== -1) {
      this.iceCreams[index] = updatedIceCream;
    }
    return of(this.iceCreams);
  }

  // Delete: Remove an ice cream by ID
  deleteIceCream(iceCreamId: number): Observable<Icecream[]> {
    this.iceCreams = this.iceCreams.filter(iceCream => iceCream.id !== iceCreamId);
    return of(this.iceCreams);
  }

  // Get an ice cream by ID
  getIceCreamById(iceCreamId: number): Observable<Icecream | undefined> {
    const iceCream = this.iceCreams.find(iceCream => iceCream.id === iceCreamId);
    return of(iceCream);
  }
}
