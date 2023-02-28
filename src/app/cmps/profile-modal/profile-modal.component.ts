import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggdinUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {
  constructor(private userService: UserService) { }

  @Output() toggle = new EventEmitter<string>()

  loggdinUser!: LoggdinUser | null
  isLogin: Boolean = false

  ngOnInit(): void {
    this.loggdinUser = this.userService.getLoggedinUser()
    console.log('this.loggdinUser:', this.loggdinUser)
  }

  toggleIsLogin() {
    this.toggle.emit()
  }

  onLogout() {
    this.userService.logout()
    this.loggdinUser = null
  }


}
