import { Component } from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {map, Observable} from "rxjs";
import {FakerData} from "../../../models/faker-data";
import {FakerService} from "../../../services/faker.service";
import {ImageModule} from "primeng/image";
import {TooltipModule} from "primeng/tooltip";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-faker-galleria',
  standalone: true,
  imports: [
    GalleriaModule,
    ImageModule,
    TooltipModule,
    CardModule
  ],
  templateUrl: './faker-galleria.component.html',
  styleUrl: './faker-galleria.component.scss'
})
export class FakerGalleriaComponent {

  public fakerData: any[] | undefined;

  activeIndex: number = 0;


  constructor(private fakerService: FakerService) {
    fakerService.getNonNullFakerData().subscribe((fakerData) => {
      this.fakerData = fakerData;
    });

    fakerService.fetchFakerData();
  }


}
