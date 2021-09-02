import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';

@NgModule({
  declarations: [ListsComponent],
  imports: [CommonModule, RouterModule, ListsRoutingModule],
})
export class ListsModule {}
