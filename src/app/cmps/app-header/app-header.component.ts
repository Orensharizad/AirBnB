import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  isExpandProfile: Boolean = false

  isExpandLogin: Boolean = false

  toggleIsProfile() {
    this.isExpandProfile = !this.isExpandProfile
  }
  toggleIsLogin() {
    this.isExpandLogin = !this.isExpandLogin
    this.isExpandProfile = false
  }

}
