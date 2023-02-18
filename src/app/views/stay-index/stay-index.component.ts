import { Component, OnInit } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import { StayService } from 'src/app/services/stay.service'

@Component({
  selector: 'stay-index',
  templateUrl: './stay-index.component.html',
  styleUrls: ['./stay-index.component.scss']
})
export class StayIndexComponent implements OnInit {
  constructor(private stayService: StayService) { }
  stays: Stay[] = []
  getStays(): void {
    this.stays = this.stayService.getStays()
  }
  ngOnInit(): void {
    this.getStays()
  }
}

// {
//   "_id": 's101',
//   "name": "Westin Kaanapali KORVN 2BR",
//   "type": "National parks",
//   "imgUrls": [
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg",
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg",
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436496/ihozxprafjzuhil9qhh4.jpg",
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436952/aef9ajipinpjhkley1e3.jpg",
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436948/vgfxpvmcpd2q40qxtuv3.jpg"
//   ],
//   "price": 595,
// }