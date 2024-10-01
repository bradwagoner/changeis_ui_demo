import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {BreadcrumbModule} from "primeng/breadcrumb";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public routes = [
    {
      url: '/home',
      label: 'Home'
    },
    {
      url: '/faker-data',
      label: 'Faker Data'
    },
    {
      url: '/faker-galleria',
      label: 'Faker Galleria'
    }
  ]


}
