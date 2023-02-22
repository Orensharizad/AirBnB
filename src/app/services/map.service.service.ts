import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  API_KEY = 'AIzaSyDnFXVkZNr_UUI6PDoFyiFZJTth_dpSAOc'
  url = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}`
  constructor() { }
}
