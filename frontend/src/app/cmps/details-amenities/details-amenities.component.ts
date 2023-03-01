import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay-model';

@Component({
  selector: 'details-amenities',
  templateUrl: './details-amenities.component.html',
  styleUrls: ['./details-amenities.component.scss']
})
export class DetailsAmenitiesComponent {
  @Input() stay!: Stay

  amenities: { title: string, url: string }[] = [
    {
      title:'Wifi',
      url:'https://air-bxb.onrender.com/assets/wifi.ea607402.svg'
    },
    {
      title:'Washer',
      url:'https://air-bxb.onrender.com/assets/washer.bb450002.svg'
    },
    {
      title:'Carbon monoxide detector',
      url:'https://air-bxb.onrender.com/assets/carbon.85b10b40.svg'
    },
    {
      title:'Cooking basics',
      url:'https://air-bxb.onrender.com/assets/cooking.b19c3728.svg'
    },
    {
      title:'Essentials',
      url:'https://air-bxb.onrender.com/assets/essentials.0b083dc2.svg'
    },
    {
      title:'Iron',
      url:'https://air-bxb.onrender.com/assets/iron.2316b03e.svg'
    },
    {
      title:'Dryer',
      url:'https://air-bxb.onrender.com/assets/dryer.38268a76.svg'
    },
  ] 


}
