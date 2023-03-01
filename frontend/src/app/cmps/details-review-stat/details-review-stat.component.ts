import { Component, Input, OnInit } from '@angular/core';
import { Stay } from 'src/app/models/stay-model';

@Component({
  selector: 'details-review-stat',
  templateUrl: './details-review-stat.component.html',
  styleUrls: ['./details-review-stat.component.scss']
})
export class DetailsReviewStatComponent  {
  @Input() stay!: Stay


}
