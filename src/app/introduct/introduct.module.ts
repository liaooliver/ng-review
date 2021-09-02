import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductRoutingModule } from './introduct-routing.module';
import { IntroductComponent } from './introduct.component';
import { RouterQueryComponent } from './components/router-query/router-query.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [IntroductComponent, RouterQueryComponent],
  imports: [
    CommonModule,
    IntroductRoutingModule,
    MatTreeModule,
    MatIconModule,
    HomeModule,
    MatCheckboxModule,
  ],
})
export class IntroductModule {}
