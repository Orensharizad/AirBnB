import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UtilService } from './util.service';

export interface User {
  _id: string
  username: string
  fullname: string
  password: string
  isAdmin: Boolean
}

export interface UserCred {
  _id?: string
  fullname: string
  username: string
  password: string
  isAdmin: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private utilService: UtilService) { }

  KEY = 'userDB'
  STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

  private _getUsers() {
    return this.utilService.loadFromStorage(this.KEY) || []
  }

  private _getById(userId: string): User | null {
    const users = this._getUsers()
    const user = users.find((user: User) => user._id === userId)
    return user ? user : null
  }

  public login(userCred: UserCred) {
    const users = this._getUsers()
    const user = users.find((user: User) => user.username === userCred.username)
    if (user) {
      this.saveLocalUser(user)
      console.log('login success')
    }

  }

  public signup(userCred: UserCred) {
    userCred._id = this.utilService.makeId()
    const users = this._getUsers()
    console.log('users: ', users);
    users.push(userCred)
    this.utilService.saveToStorage(this.KEY, users)
    this.saveLocalUser(userCred as User)

  }

  public logout() {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGEDIN_USER)
  }

  public getLoggedinUser() {
    const user = sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER)
    if (user) return JSON.parse(user)
  }

  public getEmptyCredentials(): UserCred {
    return {
      fullname: '',
      username: '',
      password: '',
      isAdmin: false
    }
  }

  public saveLocalUser(user: User) {
    console.log(user)
    user = { _id: user._id, fullname: user.fullname } as User
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }

}

