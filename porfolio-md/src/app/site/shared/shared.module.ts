import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatDialogModule } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';


export const SHARED_MATERIAL_MODULES = [
  MatToolbarModule, 
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatDialogModule,
  MatTabsModule,
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
