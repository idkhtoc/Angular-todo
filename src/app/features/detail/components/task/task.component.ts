import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/Board';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;
  @Input() isTaskUpdating: boolean = false;
  @Output() dragStartEvent = new EventEmitter();
  @Output() openModalEvent = new EventEmitter();
  @Output() updateTaskEvent = new EventEmitter<string>();
  @Output() deleteTaskEvent = new EventEmitter();
  @Output() archiveTaskEvent = new EventEmitter();
  @Output() setTaskUpdatingEvent = new EventEmitter();

  taskUpdatingValue: string = '';

  constructor() { }

  ngOnInit(): void {
    this.taskUpdatingValue = this.task.name;
  }

  setTaskUpdating(): void {
    this.setTaskUpdatingEvent.emit();
  }

  deleteTask(): void {
    this.deleteTaskEvent.emit();
  }
  
  updateTask(): void {
    this.updateTaskEvent.emit(this.taskUpdatingValue);
  }

  archiveTask(): void {
    this.archiveTaskEvent.emit();
  }

  dragStart(e: DragEvent): void {
    setTimeout(() => (e.target as HTMLElement).classList.add('invisible'), 0);

    this.dragStartEvent.emit();
  }

  dragEnd(e: DragEvent): void {
    (e.target as HTMLElement).classList.remove('invisible');
  }

  openModal(): void {
    this.openModalEvent.emit();   
  }
}
