import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBoard } from 'src/app/models/Board';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private readonly boards = new BehaviorSubject<IBoard[]>([]);
  boards$: Observable<IBoard[]> = this.boards.asObservable();

  constructor( 
    private http: HttpService 
  ) { }

  getBoards(): void {
    this.http.getBoards()
      .subscribe(data => this.boards.next(data.boards));
  }

  addBoard(name: string, description: string): void {
    this.http.addBoard(name, description)
      .subscribe(data => this.boards.next(
        [...this.boards.getValue(), data]
      ));
  }

  updateBoard(id: string, name: string): void {
    this.http.updateBoard(id, name)
      .subscribe(data => this.boards.next(
        this.boards.getValue().map(board => board._id === data._id ? data : board)
      ));
  }

  deleteBoard(id: string, _callback?: Function): void {
    this.http.deleteBoard(id)
      .subscribe(() => {
        if (_callback) _callback();

        this.boards.next(
          this.boards.getValue().filter(board => board._id !== id)
        );
      });
  }

}
