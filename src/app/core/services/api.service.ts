import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  get(path: string): Observable<any> {
    return this._http.get(`${environment}${path}`)
  }

  put(path: string, payload: Object = {}): Observable<any> {
    return this._http.put(`${environment}${path}`, payload)
  }

  post(path: string, payload: Object = {}): Observable<any> {
    return this._http.post(`${environment}${path}`, payload)
  }

  delete(path: string): Observable<any> {
    return this._http.delete(`${environment}${path}`)
  }

  

}
