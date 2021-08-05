import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { JwtService } from '../../core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private _user: UserService,
    private _router: Router,
    private _jwt: JwtService
  ) { }

  ngOnInit(): void {
  }

  login(e) {
    e.preventDefault()
    this._user.setAuth().subscribe(res => {
      this._router.navigate(['/'])
      this._jwt.saveToken('fy79575*@74#23')
    })
  }

}
