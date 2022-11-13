import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-board-modal',
  templateUrl: './add-board-modal.component.html',
  styleUrls: ['./add-board-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBoardModalComponent implements OnInit {

  @Output() addBoardEvent = new EventEmitter<{ name: string, description: string }>();
  @Output() closeModalEvent = new EventEmitter();

  addBoardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
    description: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void { }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  get nameControl(): FormControl {
    return this.addBoardForm.get('name') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.addBoardForm.get('description') as FormControl;
  }

  addBoard(): void {
    const name = this.addBoardForm.get('name')?.value!;
    const description = this.addBoardForm.get('description')?.value!;

    this.addBoardEvent.emit({ name, description });

    this.nameControl.setValue('');
    this.descriptionControl.setValue('');
  }

}
