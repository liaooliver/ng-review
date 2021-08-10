import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RxState } from '@rx-angular/state';
import { params, query } from '../../../core'


@Component({
  selector: 'app-router-query',
  templateUrl: './router-query.component.html',
  styleUrls: ['./router-query.component.scss']
})
export class RouterQueryComponent extends RxState<{ params: params, queryParams: query}> implements OnInit {

  state$ = this.select()

  constructor(
    private _route: ActivatedRoute
  ) { 
    super()
  }

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      const { query } = data
      this.set(query)
    })
  }

}
