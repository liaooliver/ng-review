import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { setUser, removeUser } from '../store/currentUserReducer.action';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public mockHttpClient: Observable<boolean> = of(true);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private _jwt: JwtService,
    private _api: ApiService,
    private _router: Router,
    private _store: Store<{ currnetUser: User }>
  ) {}

  populate(): void {
    // app have token send api get user info
    if (this._jwt.getToken()) {
      this._api.get('/user').subscribe(
        (data: { user: User; token: string }) => {
          this.setAuth(data);
        },
        (error) => {
          // token Expired handle
          if (error.status === 403) {
            this._router.navigate(['/login']);
            this.purgeAuth();
          }
        }
      );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(data: { user: User; token: string }): void {
    const { token, user } = data;
    this._store.dispatch(setUser(user));
    this._jwt.saveToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  attempAuth(payload: {}): Observable<any> {
    return this._api.post('/login', payload).pipe(
      map((data) => {
        this.setAuth(data);
        return data;
      })
    );
  }

  purgeAuth(): void {
    // cancel auth pass
    this.isAuthenticatedSubject.next(false);
    this._router.navigate(['/']);
    this._jwt.destroyToken();
    this._store.dispatch(removeUser());
  }

  getCurrentAuthenticate(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }
}
