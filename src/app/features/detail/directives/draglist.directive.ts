import { Directive, HostListener, Input } from '@angular/core';
import { Status } from 'src/app/models/Filter';
import { DetailService } from 'src/app/services/detail.service';

@Directive({
  selector: '[appDraglist]'
})
export class DraglistDirective {

  @Input() status: Status;
  @Input() taskId: string;
  @Input() prevStatus: Status;

  constructor(
    private detailService: DetailService
  ) { }

  @HostListener('dragenter', ['$event'])
  onDragenter(event: DragEvent): void {
    event.preventDefault()
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    if (this.prevStatus === this.status) return;

    this.detailService.setNewTaskStatus(this.taskId, this.status);
  }

  @HostListener('dragover', ['$event'])
  onDragover(event: DragEvent): void {
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  onDragleave(event: DragEvent): void {
    event.preventDefault();
  }
  

}
