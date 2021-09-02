import { QueryResolver } from './components/router-query/query.resolver';
import { RouterQueryComponent } from './components/router-query/router-query.component';
import { IntroductComponent } from './introduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductResolver } from './introduct.resolver';

const routes: Routes = [
  {
    path: '',
    component: IntroductComponent,
    children: [
      {
        path: ':id',
        component: RouterQueryComponent,
        resolve: {
          query: QueryResolver,
        },
      },
    ],
    resolve: {
      data_name: IntroductResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductRoutingModule {}
