import { Component } from '@angular/core';


type Guest = {
  type: string
  desc: string
  count: number

}

@Component({
  selector: 'guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss']
})
export class GuestModalComponent {

  guests: Guest[] = [
    {
      type: 'Adults',
      desc: 'Age 13+',
      count: 0
    },
    {
      type: 'Children',
      desc: 'Ages 2-12',
      count: 0
    },
    {
      type: 'Infants',
      desc: 'Under 2',
      count: 0
    },
   

  ]

}
