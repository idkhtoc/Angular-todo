import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './components/detail.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPipeModule } from 'src/app/pipes/filter-pipe/filter-pipe.module';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { FormsModule } from '@angular/forms';
import { DraglistDirective } from './directives/draglist.directive';
import { DelayedInputModule } from 'src/app/directives/delayed-input/delayed-input.module';
import { ColumnColorDirective } from './directives/column-color.directive';
import { DescriptionPipeModule } from 'src/app/pipes/description-pipe/description-pipe.module';
import { TaskCommentsModalComponent } from './components/task-comments-modal/task-comments-modal.component';
import { DetailService } from 'src/app/services/detail.service';


@NgModule({
  declarations: [
    DetailComponent,
    TasksComponent,
    TaskComponent,
    FilterTasksPipe,
    AddTaskModalComponent,
    DraglistDirective,
    ColumnColorDirective,
    TaskCommentsModalComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule,
    FilterPipeModule,
    FormsModule,
    DelayedInputModule,
    DescriptionPipeModule
  ],
  providers: [
    DetailService
  ]
})
export class DetailModule { }
