import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists.component';
import { ListsResolver } from './lists.resolver';

export const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
    resolve: {
      data: ListsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
