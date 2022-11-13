import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment } from 'src/app/models/Board';

@Component({
  selector: 'app-task-comments-modal',
  templateUrl: './task-comments-modal.component.html',
  styleUrls: ['./task-comments-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCommentsModalComponent implements OnInit {

  @Input() comments: IComment[] | null = [];
  @Input() isCommentAdd: boolean = false;

  @Output() closeModalEvent = new EventEmitter();
  @Output() addCommentEvent = new EventEmitter<string>();
  @Output() deleteCommentEvent = new EventEmitter<string>();
  @Output() toggleCommentAddEvent = new EventEmitter();

  commentAddValue: string = '';

  constructor() { }

  ngOnInit(): void { }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  addComment(): void {
    this.toggleCommentAdd();

    if (!this.commentAddValue) return;

    this.addCommentEvent.emit(this.commentAddValue);

    this.commentAddValue = '';
  }

  deleteComment(id: string): void {
    this.deleteCommentEvent.emit(id);
  }

  toggleCommentAdd(): void {
    this.toggleCommentAddEvent.emit();
  }

}
