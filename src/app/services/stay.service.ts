import { Injectable } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import data from '../../data.json'
@Injectable({
  providedIn: 'root'
})
export class StayService {

  constructor() { }
  key = 'stayBD'
  getStays(): Stay[] {
    let stays = this.loadFromStorage(this.key)
    if (!stays) {
      stays = data
}
  }

  saveToStorage(key: string, value: [] | string) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  loadFromStorage(key: string): [] | string | undefined {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
  }
}
