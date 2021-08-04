import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public mockHttpClient: Observable<boolean> = of(true)

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1)
  public isAuthenticated = this.isAuthenticatedSubject.asObservable()

  constructor() { }

  passAuth(): Observable<any> {
    return this.mockHttpClient.pipe(tap(of => {
      this.isAuthenticatedSubject.next(of)
    }))
  }

  purgeAuth() {
    this.isAuthenticatedSubject.next(true)
  }
}
