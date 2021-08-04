import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModule } from './profile/profile.module';
import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './pages/index/index.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListsComponent } from './pages/lists/lists.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [IndexComponent, AdminComponent, ListsComponent, UsersComponent],
  imports: [
    CommonModule,
    ProfileModule,
    PlatformRoutingModule,
    SharedModule
  ]
})
export class PlatformModule { }
