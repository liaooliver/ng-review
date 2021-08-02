import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { IndexComponent } from './pages/index/index.component';

import { AdminComponent } from './pages/admin/admin.component';
import { ListsComponent } from './pages/lists/lists.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [IndexComponent, AdminComponent, ListsComponent, UsersComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
  ]
})
export class PlatformModule { }
