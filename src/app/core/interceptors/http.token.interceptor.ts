import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private _jwt: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      test: 'header string test',
    };
    // console.log("FROM INTERCEPTOR => ", req)
    const token: String = this._jwt.getToken();

    if (token) headersConfig['Authorization'] = token;

    const request = req.clone({ setHeaders: headersConfig });

    return next.handle(request);
  }
}
