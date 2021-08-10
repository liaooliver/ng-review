import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { ContentComponent } from './content/content.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data:{
          animation: 'LoginPage'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data:{
          animation: 'RegisterPage'
        }
      },
      {
        path: 'intro',
        loadChildren: () => import('../introduct/introduct.module').then(m => m.IntroductModule)
      },
      {
        path: 'home',
        component: ContentComponent,
        data: {
          animation: 'ContentPage'
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
