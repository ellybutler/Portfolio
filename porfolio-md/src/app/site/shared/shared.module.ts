import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list'; 

import { FlexLayoutModule } from '@angular/flex-layout';

export const SHARED_MATERIAL_MODULES = [
  MatToolbarModule, 
  MatIconModule,
  MatCardModule,
  MatListModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...SHARED_MATERIAL_MODULES
  ],
  exports: [
    ...SHARED_MATERIAL_MODULES
  ],
})
export class SharedModule { }
