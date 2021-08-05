import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformComponent } from './platform.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.module').then(m => m.ListsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
