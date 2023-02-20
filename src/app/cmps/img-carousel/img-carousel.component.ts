import { Component, Input } from '@angular/core'

@Component({
  selector: 'img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent {
  @Input() slides!: string[]
  currIdx: number = 0

  getCurrImgUrl(): string {
    return `url(${this.slides[this.currIdx]})`
  }
  next(){
    this.currIdx++
  }
  prev(){
    this.currIdx--
  }

  moveTo(idx:number){
    this.currIdx = idx
  }
}
