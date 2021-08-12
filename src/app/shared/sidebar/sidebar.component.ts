import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() toggleSideBar = new EventEmitter<boolean>()

  toggleBar: boolean = true;
  user$: Observable<User>;

  constructor(
    private store: Store<{ currentUser: User }>
  ) { 
    this.user$ = this.store.select('currentUser')
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.toggleBar = !this.toggleBar
    this.toggleSideBar.emit(this.toggleBar)
  }

}
