import { UserService } from './core/services/user.service';
import { MockapiService } from './core/services/mockapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-review';

  constructor(private _user: UserService, private _mockapi: MockapiService) {}

  ngOnInit() {
    // check token status
    console.log('check token status');
    this._user.populate();
  }
}
