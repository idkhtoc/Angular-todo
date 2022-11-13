import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskModalComponent implements OnInit {

  @Output() addTaskEvent = new EventEmitter<string>();
  @Output() closeModalEvent = new EventEmitter();

  name: string = '';

  constructor() { }

  ngOnInit(): void { }

  addTask(): void {
    this.addTaskEvent.emit(this.name);
    
    this.name = '';
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
