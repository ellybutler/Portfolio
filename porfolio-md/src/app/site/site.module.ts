import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { ContentComponent } from './content/content..component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    ContentComponent,
    
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule
  ]
})
export class SiteModule { }
