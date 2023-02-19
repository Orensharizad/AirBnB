import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Stay } from 'src/app/models/stay-model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.scss']
})
export class StayDetailsComponent implements OnInit {
  constructor(private stayService: StayService) { }
  @Input() stayId!: string
  stay: Stay | undefined
  
  async ngOnInit() {
    const stay = await lastValueFrom(this.stayService.getById(this.stayId))
    this.stay = stay
  }

}
