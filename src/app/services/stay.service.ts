import { Injectable } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import { UtilService } from './util.service'
import data from '../../data.json'
@Injectable({
  providedIn: 'root'
})
export class StayService {
  constructor(private utilService: UtilService) { }
  // constructor() { }
  KEY = 'stayBD'
  getStays(): Stay[] {
    let stays = this.utilService.loadFromStorage(this.KEY)
    if (!stays) {
      stays = data
      this.utilService.saveToStorage(this.KEY, stays)
    }
    return stays
  }
}
