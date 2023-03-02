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
export class StayDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
  ) { }

  @Input() stayId!: string
  stay: Stay | undefined
  subscription!: Subscription

  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 31.771959,
    lng: 35.217018
  };
  zoom = 13;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  markerPositions: google.maps.LatLngLiteral[] = [];

  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => this.stay = data['stay'])
    if (this.stay) {
      this.center.lat = this.stay.loc.lan
      this.center.lng = this.stay.loc.lat
      this.markerPositions.push({
        lat:  this.stay.loc.lan,
        lng: this.stay.loc.lat
      })
    }

  }


  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
