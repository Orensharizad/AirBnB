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
  next(ev: MouseEvent) {
    ev.stopPropagation()
    this.currIdx--
  }
  prev(ev: MouseEvent) {
    ev.stopPropagation()
    this.currIdx++
  }

  moveTo(ev: MouseEvent, idx: number) {
    ev.stopPropagation()
    this.currIdx = idx
  }
}
