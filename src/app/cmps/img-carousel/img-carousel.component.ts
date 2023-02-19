import { Component, Input, NgModule, OnInit } from '@angular/core'
import { CarouselModule } from '@coreui/angular'

// @NgModule({
//   imports: [CarouselModule,]
// })

@Component({
  selector: 'img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent implements OnInit {

  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  @Input() slides!: string[]
  constructor() { }

  ngOnInit(): void {
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event)
  }
}