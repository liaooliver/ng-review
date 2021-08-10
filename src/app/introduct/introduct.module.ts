import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductRoutingModule } from './introduct-routing.module';
import { IntroductComponent } from './introduct.component';
import { RouterQueryComponent } from './components/router-query/router-query.component';


@NgModule({
  declarations: [
    IntroductComponent,
    RouterQueryComponent
  ],
  imports: [
    CommonModule,
    IntroductRoutingModule
  ]
})
export class IntroductModule { }
