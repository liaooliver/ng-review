import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _user: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this._user.passAuth().subscribe()
  }

}
