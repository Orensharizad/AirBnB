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
}
