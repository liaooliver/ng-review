import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { ContentComponent } from './pages/content/content.component';
import { UsersComponent } from './modules/platform/pages/users/users.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'main',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'user',
        component: UsersComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login-form/login-form.module').then(m => m.LoginFormModule),
  },
  {
    path: 'platform',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/platform/platform.module').then(m => m.PlatformModule),
  },
  {
    path: '',
    redirectTo: '/main', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
