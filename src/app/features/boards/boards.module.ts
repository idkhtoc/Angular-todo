import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './components/boards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DelayedInputModule } from 'src/app/directives/delayed-input/delayed-input.module';
import { DescriptionPipeModule } from 'src/app/pipes/description-pipe/description-pipe.module';
import { FilterPipeModule } from 'src/app/pipes/filter-pipe/filter-pipe.module';
import { AddBoardModalComponent } from './components/add-board-modal/add-board-modal.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsService } from 'src/app/services/boards.service';
import { GetTasksCountPipe } from './pipes/get-tasks-count.pipe';


@NgModule({
  declarations: [
    BoardsComponent,
    AddBoardModalComponent,
    BoardComponent,
    GetTasksCountPipe
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    DelayedInputModule,
    FormsModule,
    DescriptionPipeModule,
    FilterPipeModule
  ],
  providers: [
    BoardsService
  ]
})
export class BoardsModule { }
