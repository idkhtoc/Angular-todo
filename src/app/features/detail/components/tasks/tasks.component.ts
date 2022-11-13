import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, IColors } from 'src/app/models/Board';
import { Status } from 'src/app/models/Filter';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

  Status = Status;
  openedAddForm?: Status;
  dragTaskId: string;
  prevStatus: Status;

  @Input() tasks?: ITask[];
  @Input() colors: IColors;
  @Input() taskUpdating: string;
  @Output() openTaskModalEvent = new EventEmitter<string>();
  @Output() updateTaskEvent = new EventEmitter<{ name: string, prevName: string, id: string }>();
  @Output() addTaskEvent = new EventEmitter<{ name: string, status: Status }>();
  @Output() colorChangeEvent = new EventEmitter<{ color: string, status: Status }>();
  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() archiveTaskEvent = new EventEmitter<string>();
  @Output() setTaskUpdatingEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  toggleAddForm(status?: Status): void {
    this.openedAddForm = status;
  }

  openTaskModal(taskId: string): void {
    this.openTaskModalEvent.emit(taskId);
  }

  addTask(name: string, status: Status): void {
    this.openedAddForm = undefined;

    if (!name || !status) return;

    this.addTaskEvent.emit({ name, status });
  }

  updateTask(name: string, prevName: string, id: string): void {
    this.updateTaskEvent.emit({ name, prevName, id });
  }

  setTaskUpdating(id: string): void {
    this.setTaskUpdatingEvent.emit(id);
  }

  deleteTask(id: string): void {
    this.deleteTaskEvent.emit(id);
  }

  archiveTask(id: string): void {
    this.archiveTaskEvent.emit(id);
  }

  dragStart(task: ITask): void {
    this.dragTaskId = task._id;
    this.prevStatus = task.status;
  }

  title(status: Status): string {
    if (status === Status.TD) return 'ToDo';

    if (status === Status.D) return 'Done';

    return 'In Progress';
  }

  colorChange(e: Event, status: Status): void {
    this.colorChangeEvent.emit({ color: (e.target as HTMLInputElement).value, status });
  }

}
