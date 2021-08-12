import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../core'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _user:  UserService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.verifyToken(true);
  }

  verifyToken(islogin): boolean | UrlTree{
    // console.log(this._user.getCurrentAuthenticate())
    if (!this._user.getCurrentAuthenticate()) {
      return this._router.parseUrl('/login')
    }

    return true
  }
  
}
