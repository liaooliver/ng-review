import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { List } from '../core'
import { MockListService } from '../core'

@Injectable({
  providedIn: 'root'
})
export class ListsResolver implements Resolve<boolean> {

  constructor(
    private _mockList: MockListService
  ){}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<any> {

    console.log("Lists Resolve is Working!!!", "state => ", state, "route => ", route)
    return this._mockList.mockHttpClient()
  }
}
