import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterHeaderComponent } from './filter-header/filter-header.component';
import { DelayedInputModule } from '../directives/delayed-input/delayed-input.module';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    FilterHeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    DelayedInputModule
  ],
  exports: [
    FilterHeaderComponent,
    ModalComponent
  ]
})
export class SharedModule { }
