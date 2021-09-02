import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth/auth.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { MatTreeModule } from '@angular/material/tree';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [HomeComponent, ContentComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    AuthModule,
    HomeRoutingModule,
    SharedModule,
    MatTableModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    CdkTreeModule,
  ],
  exports: [],
})
export class HomeModule {}
