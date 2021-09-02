import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  getToken(): String {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token): void {
    localStorage.setItem('jwtToken', token);
  }

  destroyToken(): void {
    localStorage.removeItem('jwtToken');
  }
}
