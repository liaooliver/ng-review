import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxState } from '@rx-angular/state';
import { List } from '../core/index';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent extends RxState<{ table: List[], isLoading: boolean }> implements OnInit {

  private state$ = this.select()
  readonly isLoading$ = this.select('isLoading');
  readonly table$ = this.select('table')

  constructor(
    private _route: ActivatedRoute
  ) {
    super()
  }

  ngOnInit(): void {
    this.set({ isLoading: true })
    this._route.data.subscribe((data: { data: List[] }) => {
      // console.log("From List component: ", data)
      this.set({ table: data.data })
      this.set({ isLoading: false })
    })
  }

}
