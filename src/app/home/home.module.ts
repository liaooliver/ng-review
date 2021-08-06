import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth/auth.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [HomeComponent, ContentComponent],
  imports: [
    CommonModule,
    AuthModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
