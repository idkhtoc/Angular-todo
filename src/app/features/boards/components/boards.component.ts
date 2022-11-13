import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from 'src/app/models/Board';
import { AllFilter, Filter, FilterType } from 'src/app/models/Filter';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  isModalOpen: boolean = false;

  boards!: Observable<IBoard[]>;

  filterType = FilterType.boards; 

  searchValue: string = '';
  filterValue: AllFilter = Filter.date;
  filterDirection: boolean = false;

  boardUpdating: string;

  constructor(
    private boardsService: BoardsService
  ) {}

  ngOnInit(): void {
    this.boardsService.getBoards();
    this.boards = this.boardsService.boards$;
  }

  addBoard(boardInfo: { name: string, description: string }): void {
    this.boardsService.addBoard(boardInfo.name, boardInfo.description);

    this.isModalOpen = false;
  }

  updateBoard(name: string, prevName: string, id: string): void {
    this.boardUpdating = '';

    if (!name || prevName === name) return;

    this.boardsService.updateBoard(id, name);
  }
  
  setBoardUpdating(id: string): void {
    this.boardUpdating = id;
  }

  deleteBoard(id: string): void {
    this.boardsService.deleteBoard(id);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  search(value: string): void {
    this.searchValue = value;
  }

  setFilterDirection(value: boolean): void {
    this.filterDirection = value;
  }

  setFilterValue(value: AllFilter): void {
    this.filterValue = value;
  }
}
