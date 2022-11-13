import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllFilter, FilterType } from 'src/app/models/Filter';

@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterHeaderComponent implements OnInit {

  FilterType = FilterType;

  @Input() filterType: FilterType;
  @Input() title: string;

  @Output() openDescModalEvent = new EventEmitter();
  @Output() openArchiveModalEvent = new EventEmitter();
  @Output() openAddModalEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter<string>();
  @Output() selectFilterValueEvent = new EventEmitter<AllFilter>();
  @Output() selectFilterDirectionEvent = new EventEmitter<boolean>();
  @Output() deleteBoardEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  search($event: Event) {
    this.searchEvent.emit(($event.target as HTMLInputElement).value)
  }

  selectFilterValue($event: Event) {
    this.selectFilterValueEvent.emit(($event.target as HTMLInputElement).value as AllFilter);
  }

  selectFilterDirection($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    
    this.selectFilterDirectionEvent.emit(value === 'ASC');
  }

  openDescModal() {
    this.openDescModalEvent.emit();
  }

  openArchiveModal() {
    this.openArchiveModalEvent.emit();
  }

  openAddModal() {
    this.openAddModalEvent.emit();
  }

  deleteBoard() {
    this.deleteBoardEvent.emit();
  }

}
