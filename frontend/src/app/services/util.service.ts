import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  saveToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  loadFromStorage(key: string): any {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
  }

  makeId(length = 6) {
    let txt = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
  }
}
