import { Injectable } from '@angular/core'
import { Stay, StayFilter } from 'src/app/models/stay-model'
import { UtilService } from './util.service'
import data from '../../data.json'
import { BehaviorSubject, Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StayService {
  constructor(private utilService: UtilService) { }

  KEY = 'stayBD'

  private _stays$ = new BehaviorSubject<Stay[]>([]);
  public stays$ = this._stays$.asObservable()

  private _stayFilter$ = new BehaviorSubject<StayFilter>({ term: '' })
  public stayFilter$ = this._stayFilter$.asObservable()

  public query() {
    const filterBy = this._stayFilter$.value
    let stays = this.utilService.loadFromStorage(this.KEY)
    if (!stays) {
      stays = data.map(stay => ({ ...stay, _id: this.utilService.makeId() }))
      this.utilService.saveToStorage(this.KEY, stays)
    }
    if (filterBy.term) {
      stays = stays.filter((stay: Stay) => stay.types.includes(filterBy.term))
    }
    this._stays$.next(stays)
  }

  public remove(stayId: string) {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stayIdx = stays.findIndex((stay: Stay) => stay._id === stayId)
    stays.splice(stayIdx, 1)
    this.utilService.saveToStorage(this.KEY, stays)
    this._stays$.next(stays)
    return of()
  }

  public getById(stayId: string): Observable<Stay> {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stay = stays.find((stay: Stay) => stay._id === stayId)
    return stay ? of({ ...stay }) : of()
  }

  public save(stay: Stay) {
    return stay._id ? this._edit(stay) : this._add(stay)
  }

  public setFilter(stayFilter: StayFilter) {
    this._stayFilter$.next(stayFilter)
    this.query()
}

  private _add(stay: Stay) {
    stay._id = this.utilService.makeId()
    const stays = this.utilService.loadFromStorage(this.KEY)
    stays.push(stay)
    this.utilService.saveToStorage(this.KEY, stays)
    this._stays$.next(stays)
    return of(stay)
  }

  private _edit(stay: Stay) {
    const stays = this.utilService.loadFromStorage(this.KEY)
    const stayIdx = stays.findIndex((_stay: Stay) => _stay._id === stay._id)
    stays.splice(stayIdx, 1, stay)
    this.utilService.saveToStorage(this.KEY, stays)
    this._stays$.next(stays)
    return of(stay)
  }

  
}
