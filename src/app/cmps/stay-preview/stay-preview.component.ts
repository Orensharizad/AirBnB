import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'

@Component({
  selector: 'stay-preview',
  templateUrl: './stay-preview.component.html',
  styleUrls: ['./stay-preview.component.scss']
})

export class StayPreviewComponent implements OnInit {
  @Input() stay!: Stay
  @Output() remove = new EventEmitter<string>()
  @Output() selectStay = new EventEmitter<string>()

  ngOnInit(): void {
    // console.log('stay:', this.stay)
  }

 
}
