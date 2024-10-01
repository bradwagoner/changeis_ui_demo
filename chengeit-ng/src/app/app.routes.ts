import { Routes } from '@angular/router';
import {HomeComponent} from "./components/routed/home/home.component";
import {FakerComponent} from "./components/routed/faker/faker.component";
import {FakerGalleriaComponent} from "./components/routed/faker-galleria/faker-galleria.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'faker-data', component: FakerComponent},
  {path: 'faker-galleria', component: FakerGalleriaComponent},
];
