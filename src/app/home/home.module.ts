import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { AuthModule } from '../auth/auth.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [HomeComponent, ContentComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    AuthModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
