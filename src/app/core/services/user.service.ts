import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public mockHttpClient: Observable<boolean> = of(true)

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)
  public isAuthenticated = this.isAuthenticatedSubject.asObservable()

  private currentUserSubject = new BehaviorSubject<User>({} as User)
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged())

  constructor(
    private _jwt: JwtService
  ) {  }

  populate(): void {
    if (this._jwt.getToken()) {
      this.currentUserSubject.next({
        email: '123@gmail.com',
        username: 'angular'
      })
      this.isAuthenticatedSubject.next(true)
    } else {
     this.purgeAuth() 
    }
  }

  setAuth(): Observable<any> {
    return this.mockHttpClient.pipe(tap(of => {
      this.currentUserSubject.next({
        email: '123@gmail.com',
        username: 'angular'
      })
      this.isAuthenticatedSubject.next(of)
    }))
  }

  purgeAuth() {
    this.isAuthenticatedSubject.next(false)
  }

  getCurrentAuthenticate() {
    return this.isAuthenticatedSubject.getValue()
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value
  }
}
