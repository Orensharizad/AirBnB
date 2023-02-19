import { Component, OnInit } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import { Observable } from 'rxjs';
import { StayService } from 'src/app/services/stay.service'

@Component({
  selector: 'stay-index',
  templateUrl: './stay-index.component.html',
  styleUrls: ['./stay-index.component.scss']
})
export class StayIndexComponent implements OnInit {
  constructor(private stayService: StayService) { }

  stays$!: Observable<Stay[]>

  ngOnInit(): void {
    this.stayService.query()
    this.stays$ = this.stayService.stays$
    console.log('this.stays$:', this.stays$);
  }
}