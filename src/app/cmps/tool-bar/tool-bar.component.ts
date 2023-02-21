import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StayFilter } from 'src/app/models/stay-model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
  constructor(private stayService: StayService) { }
  imgs: { title: string, url: string }[] = [
    {
      title: 'Castles',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Castles_h3vc82.png'
    },
    {
      title: 'Amazing views',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Amazin_views_g3ndn4.png'
    },
    {
      title: 'Earth homes',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Earth_homes_bao1mc.png'
    },
    {
      title: 'Islands',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Islands_cr82fg.png'
    },
    {
      title: 'Luxe',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Luxe_nbrmyo.png'
    },
    {
      title: 'Mansions',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Mansions_r7upsq.png'
    },
    {
      title: 'OMG!',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/OMG_n7p7bq.png'
    },
    {
      title: 'Trending',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Trending_cwbjcz.png'
    },
    {
      title: 'Boats',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Boats_mq7yia.png'
    },
    {
      title: 'Domes',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Domes_hjecfw.png'
    },
    {
      title: 'Cabins',
      url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Cabins_gnbsvq.png'
    },
  ]

  onSetFilter(stayFilter:StayFilter) {
    this.stayService.setFilter(stayFilter)
  }
}

