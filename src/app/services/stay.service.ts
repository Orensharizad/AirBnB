import { Injectable } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import { UtilService } from './util.service'
import data from '../../data.json'
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StayService {
  constructor(private utilService: UtilService) { }

  KEY = 'stayBD'

  private _stays$ = new BehaviorSubject<Stay[]>([]);
  public stays$ = this._stays$.asObservable()

  public query() {
    let stays = this.utilService.loadFromStorage(this.KEY)
    if (!stays) {
      stays = data
      this.utilService.saveToStorage(this.KEY, stays)
    }
    this._stays$.next(stays)
  }
}
