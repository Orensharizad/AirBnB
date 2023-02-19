import { Injectable } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import { UtilService } from './util.service'
import data from '../../data.json'
import { BehaviorSubject, of } from 'rxjs'
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
      stays = data.map(stay => ({ ...stay, _id: this.utilService.makeId() }))
      this.utilService.saveToStorage(this.KEY, stays)
    }
    this._stays$.next(stays)
  }

  public remove(stayId: string) {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stayIdx = stays.findIndex((stay: Stay) => stay._id === stayId)
    stays.splice(stayIdx, 1)
    this._stays$.next(stays)
    return of()
  }
}
