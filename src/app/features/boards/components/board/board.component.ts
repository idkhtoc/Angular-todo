import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBoard, ITask } from 'src/app/models/Board';
import { Status } from 'src/app/models/Filter';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {

  @Input() board: IBoard;
  @Input() isBoardUpdating: boolean;

  @Output() updateBoardEvent = new EventEmitter<string>();
  @Output() deleteBoardEvent = new EventEmitter();
  @Output() setBoardUpdatingEvent = new EventEmitter();

  Status = Status;
  boardUpdatingValue: string = '';

  constructor() { }

  ngOnInit(): void { 
    this.boardUpdatingValue = this.board.name;
  }
  
  setBoardUpdating(): void {
    this.setBoardUpdatingEvent.emit();
  }

  deleteBoard(): void {
    this.deleteBoardEvent.emit();
  }

  updateBoard(): void {
    this.updateBoardEvent.emit(this.boardUpdatingValue);
  }
}
