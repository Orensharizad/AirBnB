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