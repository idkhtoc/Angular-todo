import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionPipe } from './description.pipe';



@NgModule({
  declarations: [
    DescriptionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionPipe
  ]
})
export class DescriptionPipeModule { }
