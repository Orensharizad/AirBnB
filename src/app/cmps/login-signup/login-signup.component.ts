import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserCred, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  @Output() close = new EventEmitter()

  credentials!: UserCred
  user = this.userService.getLoggedinUser()
  isSignup: Boolean = false

  ngOnInit(): void {
    this.credentials = this.userService.getEmptyCredentials()
    console.log('user:', this.user)
  }


  onLogin() {
    if (!this.credentials.username) return;
    this.userService.login(this.credentials);
    this.user = this.userService.getLoggedinUser();
    this.clearCredentials();
    if(this.user) this.onClose()
  }
  onSignup() {
    if (
      !this.credentials.username ||
      !this.credentials.password ||
      !this.credentials.fullname
    )
      return;
    this.userService.signup(this.credentials);
    this.user = this.userService.getLoggedinUser();
    this.clearCredentials();
    this.onClose()
  }
  onLogOut() {
    this.userService.logout()
    this.user = null
  }

  clearCredentials() {
    this.credentials = { username: "", password: "", fullname: "", isAdmin: false };
  }

  onClose() {
    this.close.emit()
  }

}
