import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from 'ngx-airbnb-calendar';
import { Stay } from 'src/app/models/stay-model';
import fr from "date-fns/locale/fr";



@Component({
  selector: 'details-reserve',
  templateUrl: './details-reserve.component.html',
  styleUrls: ['./details-reserve.component.scss']
})

export class DetailsReserveComponent {

  @Input() stay!: Stay

  date: string | null = null;
  checkIn: Date = new Date()
  checkOut: Date = new Date(Date.now() + (3600 * 1000 * 72))
  totaelDays!: any
  children: number = 0

  isShowGuestModal: boolean = false


  options: CalendarOptions = {
    format: "yyyy/LL/dd",
    formatDays: "eeeeee",
    firstCalendarDay: 1,
    closeOnSelected: true,
  };




  get GetTotalDays() {
    return this.checkOut.getDate() - this.checkIn.getDate()
  }

  get Price() {
    return this.stay.price * this.GetTotalDays
  }

  get CleanTax() {
    return (this.Price * 0.10).toFixed()
  }

  get ServiceFee() {
    return (this.Price * 0.17).toFixed()
  }

  get TotalPrice() {
    return (+this.Price + +this.CleanTax + +this.ServiceFee)
  }
  onAddChildren() {
    this.children++
  }
  onRremoveChildren() {
    if (this.children === 0) return
    this.children--
  }


  onSetDate() {
    if (this.date) {
      const dates = this.date?.split('-')
      this.checkIn = new Date(dates[0])
      this.checkOut = new Date(dates[1])
    }


  }



}
