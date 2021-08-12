import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user.model';
import { RxState } from '@rx-angular/state';
import { MockapiService } from '../core'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends RxState<{ profile: User, apiResponse: string }> implements OnInit {

  personalProfile$ = this.select('profile')
  apiResponse$ = this.select('apiResponse')

  constructor(
    private route: ActivatedRoute,
    private _mock: MockapiService,
    private store: Store<{ currentUser: User }>
  ) { 
    super()
    // data from ngrx and RxState
    this.connect('profile', this.store.select('currentUser'));
  }

  ngOnInit() {
    this._mock.getMockAPIResponse().subscribe((res: { message: string }) => {
      const { message } = res
      this.set('apiResponse', (s) => s.apiResponse = message)
    })

    // data from services through resolve router
    // this.route.data.subscribe((data: { profile: User }) => {
    //   if (data.profile) {
    //     this.set('profile', (s) => s.profile = data.profile)
    //   }
    // })
  }

}
