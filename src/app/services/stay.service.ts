import { Injectable } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import data from '../../data.json'
@Injectable({
  providedIn: 'root'
})
export class StayService {

  constructor() { }
  KEY = 'stayBD'
  getStays(): Stay[] {
    let stays = this.loadFromStorage(this.KEY)
    if (!stays) {
      stays = data
      this.saveToStorage(this.KEY, stays)
      // this.saveToStorage(this.KEY, data)
      // stays = this.loadFromStorage(this.KEY)
    }
    return stays
  }

  saveToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  loadFromStorage(key: string): any {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
  }
}
