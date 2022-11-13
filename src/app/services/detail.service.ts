import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBoard, IComment } from '../models/Board';
import { Status } from '../models/Filter';
import { BoardsService } from './boards.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private readonly board = new BehaviorSubject<IBoard | null>(null);
  board$: Observable<IBoard | null> = this.board.asObservable();

  private readonly comments = new BehaviorSubject<IComment[]>([]);
  comments$: Observable<IComment[]> = this.comments.asObservable();

  constructor(
    private http: HttpService,
    private boardsService: BoardsService,
    private router: Router
  ) { }

  private _setBoard = (data: IBoard): void => {
    this.board.next(data);
  }

  private _setComments = (data: IBoard, taskId: string): void => {
    this._setBoard(data);
    this.getComments(taskId);
  }
  
  get boardId(): string {
    return this.board.getValue()?._id || '';
  }

  getComments(id: string) {
    this.comments.next(this.board.getValue()!.tasks.find(task => task._id === id)!.comments);
  }

  getBoardById(id: string): void {
    this.board.next(null);

    this.http.getBoardById(id).subscribe(this._setBoard);
  }

  deleteBoard(): void {
    this.boardsService.deleteBoard(this.boardId, () => this.router.navigateByUrl('/boards'));
  }

  changeBoardColumnColor(column: Status, color: string): void {
    this.http.changeBoardColumnColor(this.boardId, column, color).subscribe(this._setBoard);
  }

  addTask(name: string, status: Status): void {
    this.http.addTask(this.boardId, name, status).subscribe(this._setBoard);
  }

  updateTask(id: string, name: string): void {
    this.http.updateTask(this.boardId, id, name).subscribe(this._setBoard);
  }

  deleteTask(id: string): void {
    this.http.deleteTask(this.boardId, id).subscribe(this._setBoard);
  }

  setNewTaskStatus(id: string, status: Status): void {
    this.http.setNewTaskStatus(this.boardId, id, status).subscribe(this._setBoard);
  }

  toggleArchiveTask(id: string): void {
    this.http.toggleArchiveTask(this.boardId, id).subscribe(this._setBoard);
  }
  
  addComment(id: string, comment: string): void {
    this.http.addComment(this.boardId, id, comment).subscribe(data => this._setComments(data, id));
  }

  deleteComment(taskId: string, commentId: string): void {
    this.http.deleteComment(this.boardId, taskId, commentId).subscribe(data => this._setComments(data, taskId));
  }

}
