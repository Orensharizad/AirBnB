import { Component, Input } from '@angular/core';
import { Review, Stay } from 'src/app/models/stay-model';

@Component({
  selector: 'details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.scss']
})
export class DetailsReviewsComponent {
  @Input() stay!: Stay

  isLessDesc: Boolean = false
  isLessReviews: Boolean = false

  truncate(str: string,): string {
    const n = 150
    return (!this.isLessDesc && str.length > n) ? str.substring(0, n - 1) + '...' : str
  }

  getReviews(): Review[] {
    const newReviews = [...this.stay.reviews]
    const lessReviews = newReviews.splice(0, 6)
    return !this.isLessReviews ? lessReviews : this.stay.reviews
  }
  trackByFn(idx: number, item: any) {
    return item._id
  }

  getBtnShowTxt() {
    return !this.isLessReviews ? `Show All Reviews(${this.stay.reviews.length - 6})` :
      'Show Less'

  }

}
