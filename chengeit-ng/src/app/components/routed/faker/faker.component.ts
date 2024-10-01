import {Component, OnDestroy} from '@angular/core';
import {FakerService} from "../../../services/faker.service";
import {FakerData} from "../../../models/faker-data";
import {BehaviorSubject, Observable} from "rxjs";
import {FakerModelDisplayComponent} from "../../display/faker-model-display/faker-model-display.component";
import {AsyncPipe, CommonModule, JsonPipe} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-faker',
  standalone: true,
  imports: [
    CommonModule,
    FakerModelDisplayComponent,
    AsyncPipe,
    JsonPipe,
    PanelModule,
    CardModule
  ],
  templateUrl: './faker.component.html',
  styleUrl: './faker.component.scss'
})
export class FakerComponent {

  public fakerData: Observable<FakerData[]>;

  constructor(private fakerService: FakerService) {
    this.fakerData = fakerService.getNonNullFakerData();

    fakerService.fetchFakerData();
  }

}
