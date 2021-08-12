import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(
    private _api: ApiService
  ) { }

  getMockAPIResponse(){
    return this._api.get('/mock')
  }
}