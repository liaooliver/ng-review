import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlatformComponent } from './platform.component';

@NgModule({
  declarations: [PlatformComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule
  ]
})
export class PlatformModule { }
