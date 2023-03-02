import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay-model';

@Component({
  selector: 'details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss']
})
export class DetailsInfoComponent {
  @Input() stay!: Stay

}
