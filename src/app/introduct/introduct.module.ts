import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductRoutingModule } from './introduct-routing.module';
import { IntroductComponent } from './introduct.component';


@NgModule({
  declarations: [
    IntroductComponent
  ],
  imports: [
    CommonModule,
    IntroductRoutingModule
  ]
})
export class IntroductModule { }
