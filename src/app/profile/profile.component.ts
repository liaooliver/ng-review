import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user.model';
import { RxState } from '@rx-angular/state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends RxState<{ profile: User }> implements OnInit {

  personalProfile$ = this.select('profile')

  constructor(
    private route: ActivatedRoute,
  ) { 
    super()
  }

  ngOnInit() {
    this.route.data.subscribe((data: { profile: User }) => {
      if (data.profile) {
        this.set('profile', (s) => s.profile = data.profile)
      }
    })
  }

}
