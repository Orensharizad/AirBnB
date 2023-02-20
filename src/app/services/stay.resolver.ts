import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Stay } from '../models/stay-model';
import { StayService } from './stay.service';

@Injectable({
  providedIn: 'root'
})
export class StayResolver implements Resolve<Stay> {
  constructor (private stayService:StayService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stay> {
    // return of(true);
    const id = route.params['id']
    return this.stayService.getById(id)
  }
}
