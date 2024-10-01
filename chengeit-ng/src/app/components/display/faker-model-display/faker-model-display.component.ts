import {Component, Input} from '@angular/core';
import {FakerData} from "../../../models/faker-data";

import {PanelModule} from "primeng/panel";
import {ImageModule} from "primeng/image";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-faker-model-display',
  standalone: true,
  imports: [PanelModule, ImageModule, TooltipModule],
  templateUrl: './faker-model-display.component.html',
  styleUrl: './faker-model-display.component.scss'
})
export class FakerModelDisplayComponent {

  @Input()
  fakerModel: FakerData;

}
