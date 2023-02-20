import { Component, Input } from '@angular/core';
import { Review } from 'src/app/models/stay-model';

@Component({
  selector: 'details-review-preview',
  templateUrl: './details-review-preview.component.html',
  styleUrls: ['./details-review-preview.component.scss']
})
export class DetailsReviewPreviewComponent {
  @Input() review!: Review

  isLessDesc: Boolean = false

  truncate(str: string,): string {
    const n = 150
    return (!this.isLessDesc && str.length > n) ? str.substring(0, n - 1) + '...' : str
  }


}
