import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { RxState } from '@rx-angular/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends RxState<{ authenticated: boolean }> implements OnInit {
  isAuthenticated$ = this.select('authenticated');

  constructor(private _user: UserService) {
    super();
  }

  ngOnInit(): void {
    this.connect('authenticated', this._user.isAuthenticated);
  }

  logout(): void {
    this._user.purgeAuth();
  }
}
