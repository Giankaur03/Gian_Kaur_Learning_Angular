import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {IcecreamListComponent} from "./app/icecream-list/icecream-list.component";
import {IcecreamDetailComponent} from "./app/icecream-list-item/icecream-list-item.component";
import {ModifyIcecreamComponent} from "./app/modify-icecream-item/modify-icecream-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/icecream', pathMatch: 'full' }, // default route
  { path: 'icecream', component: IcecreamListComponent },
  { path: 'icecream/:id', component: IcecreamDetailComponent },
  { path: 'modify-icecream', component: ModifyIcecreamComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
