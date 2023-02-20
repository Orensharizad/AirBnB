import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Stay } from 'src/app/models/stay-model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.scss']
})
export class StayDetailsComponent implements OnInit , OnDestroy {
  constructor(
    private route: ActivatedRoute,
  ) { }
  @Input() stayId!: string
  stay: Stay | undefined
  subscription!: Subscription

  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => this.stay = data['stay'])
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe()
  }

}
