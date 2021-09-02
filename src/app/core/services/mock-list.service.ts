import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockListService {
  private mockTableData: List[] = [
    {
      title: 'Intro to CSS',
      author: 'Adam',
      views: '111',
    },
    {
      title:
        'A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design',
      author: 'Chris',
      views: '188',
    },
    {
      title: 'Intro to JavaScript',
      author: 'Adam',
      views: '463',
    },
  ];

  constructor() {}

  mockHttpClient(): Observable<List[]> {
    return of(this.mockTableData);
  }
}
