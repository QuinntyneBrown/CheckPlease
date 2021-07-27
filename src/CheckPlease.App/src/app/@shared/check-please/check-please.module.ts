import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckPleaseComponent } from './check-please.component';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    CheckPleaseComponent
  ],
  exports: [
    CheckPleaseComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CheckPleaseModule { }
