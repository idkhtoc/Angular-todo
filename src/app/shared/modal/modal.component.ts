import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  closeModal(event: Event): void {
    if (!['modal', 'close'].includes((event.target as HTMLElement).className)) return;
    
    this.closeModalEvent.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModalEvent.emit();
    }
  } 

}
