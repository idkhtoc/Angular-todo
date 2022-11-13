import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'express-validator';
import { Observable, Subscription } from 'rxjs';
import { IBoard, IComment } from 'src/app/models/Board';
import { Filter, FilterType, Status, AllFilter } from 'src/app/models/Filter';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  filterType = FilterType.tasks;
  searchValue: string = ''
  filterValue: AllFilter = Filter.date;
  filterDirection: boolean = false;

  board: Observable<IBoard | null>;
  comments: Observable<IComment[]>;
  taskId: string;
  taskUpdating: string;

  isDescModalOpen: boolean = false;
  isTaskModalOpen: boolean = false;
  isArchiveModalOpen: boolean = false;
  isCommentAdd: boolean = false;

  routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
    this.board = this.detailService.board$;
    this.comments = this.detailService.comments$;

    this.routeSubscription = this.route.params.subscribe(params => {
      if (this.detailService.boardId === params['id']) return;

      this.detailService.getBoardById(params['id']);
    });
  }
  
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
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

  deleteBoard(): void {
    this.detailService.deleteBoard();
  }

  addTask(obj: { name: string, status: Status }): void {
    this.detailService.addTask(obj.name, obj.status);
  }

  updateTask(obj: { name: string, prevName: string, id: string }): void {
    this.taskUpdating = '';

    if (!obj.name || obj.name === obj.prevName) return;

    this.detailService.updateTask(obj.id, obj.name);
  }

  setTaskUpdating(id: string) {
    this.taskUpdating = id;
  }

  deleteTask(id: string): void {
    this.detailService.deleteTask(id);
  }

  toggleArchiveTask(id: string): void {
    this.detailService.toggleArchiveTask(id);
  }

  colorChange(obj: { color: string, status: Status }): void {
    this.detailService.changeBoardColumnColor(obj.status, obj.color);
  }

  openTaskModal(id: string): void {
    this.taskId = id;
    this.detailService.getComments(id);
    this.isTaskModalOpen = true;
  }

  closeTaskModal(): void {
    this.isTaskModalOpen = false;
  }

  toggleDescModal(): void {
    this.isDescModalOpen = !this.isDescModalOpen;
  }

  toggleArchiveModal(): void {
    this.isArchiveModalOpen = !this.isArchiveModalOpen;
  }
  
  toggleCommentAdd(): void {
    this.isCommentAdd = !this.isCommentAdd;
  }

  addComment(comment: string): void {
    this.detailService.addComment(this.taskId, comment);
  }

  deleteComment(id: string): void {
    this.detailService.deleteComment(this.taskId, id);
  }
}
