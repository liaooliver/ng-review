import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
// import { UserService } from '../../core/services/user.service';
import { JwtService, ApiService, UserService } from '../../core'

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
    private _jwt: JwtService,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
  }

  login(e) {
    e.preventDefault()
    // console.log(this.loginForm.value)
    const payload = { user:this.loginForm.value }
    
    this._user.attempAuth(payload).subscribe(
      data => this._router.navigate(['/']), 
      error => {
        // 帳號密碼錯誤處理
        // console.log("帳號密碼錯誤處理", error)
      }
    )
  }

}
