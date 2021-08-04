import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListsComponent } from './pages/lists/lists.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
