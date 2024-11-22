import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {IceCreamListComponent} from "./app/icecream-list/icecream-list.component";
import {IcecreamListItemComponent} from "./app/icecream-list-item/icecream-list-item.component";
import {ModifyIcecreamComponent} from "./app/modify-icecream/modify-icecream.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



const routes: Routes = [
  {path:'', redirectTo: '/icecream', pathMatch: 'full'},
  {path:'icecream', component: IceCreamListComponent }, // leave this as it is as eagerly loading
  {path:'icecreamList',
  loadComponent: () =>
  import('./app/icecream-list-item/icecream-list-item.component').then(m =>m.IcecreamListItemComponent) },

  {path: 'modifyIcecream',
  loadComponent: () =>
  import('./app/modify-icecream/modify-icecream.component').then(m => m.ModifyIcecreamComponent)},

  {path: '**',
  loadComponent: () =>
  import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
