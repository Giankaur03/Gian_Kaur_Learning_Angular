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
  {path:'icecream', component: IceCreamListComponent },
  {path:'icecreamList', component: IcecreamListItemComponent },
  {path: 'modifyIcecream', component: ModifyIcecreamComponent },
  {path: '**', component: PageNotFoundComponent }
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
