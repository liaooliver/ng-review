import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core';

@Injectable({
  providedIn: 'root',
})
export class PlatformResolverService {
  constructor(private _router: Router, private _user: UserService) {}

  resolver() {
    return this._user.getCurrentUser();
  }
}
