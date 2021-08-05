import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserService } from '../core/index';
import { User } from '../core/models/user.model';

@Injectable()
export class ProfileResolver implements Resolve<any> {

  constructor(
    private _user: UserService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): User {
    console.log("REOLVER", route)
    return this._user.getCurrentUser()
  }

}
