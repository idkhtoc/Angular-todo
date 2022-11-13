import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IBoard } from '../models/Board';
import { Status } from '../models/Filter'
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

interface IDataType {
  board?: IBoard,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  private _catchError = (res: HttpErrorResponse) => {
    const message = res.error?.message || res.message;

    this.toastr.error(message);
          
    return throwError(() => message);
  }

  private _mapRequest = (data: IDataType): IBoard => {
    this.toastr.success(data.message);

    return data.board!;
  }

  getBoardById(id: string): Observable<IBoard> {
    return this.http.get<{ board: IBoard }>(`api/boards/${id}`, { withCredentials: true })
      .pipe(
        map(data => data.board),
        catchError(res => {
          this.router.navigateByUrl('/boards');

          return this._catchError(res);
        })
      );
  }

  getBoards(): Observable<{ boards: IBoard[] }> {
    return this.http.get<{ boards: IBoard[] }>(`api/boards`, { withCredentials: true })
      .pipe( catchError(this._catchError) );
  }

  addBoard(name: string, description: string): Observable<IBoard> {
    return this.http.post<IDataType>(
      'api/boards', 
      { name, description }, 
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }

  updateBoard(id: string, name: string): Observable<IBoard> {
    return this.http.put<IDataType>(
      `api/boards/${id}`, 
      { name }, 
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }

  deleteBoard(id: string): Observable<void> {
    return this.http.delete<IDataType>(`api/boards/${id}`)
      .pipe( 
        map(data => { this.toastr.success(data.message) }), 
        catchError(this._catchError) 
      );
  }

  changeBoardColumnColor(id: string, column: Status, color: string): Observable<IBoard> {
    return this.http.patch<IDataType>(
      `api/boards/${id}/column_color`, 
      { column, color }, 
      { withCredentials: true }
    )
    .pipe( 
      map(data => data.board!), 
      catchError(this._catchError) 
    );
  }

  addTask(id: string, name: string, status: Status): Observable<IBoard> {
    return this.http.post<IDataType>(
      `api/boards/${id}/tasks`, 
      { name, status }, 
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }

  updateTask(boardId: string, taskId: string, name: string): Observable<IBoard> {
    return this.http.put<IDataType>(
      `api/boards/${boardId}/tasks/${taskId}`,
      { name },
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }

  deleteTask(boardId: string, taskId: string): Observable<IBoard> {
    return this.http.delete<IDataType>(
      `api/boards/${boardId}/tasks/${taskId}`, 
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }

  setNewTaskStatus(boardId: string, taskId: string, status: Status): Observable<IBoard> {
    return this.http.patch<IDataType>(
      `api/boards/${boardId}/tasks/${taskId}/status`,
      { status },
      { withCredentials: true }
    ).pipe(
      map(data => data.board!),
      catchError(this._catchError)
    );
  }

  toggleArchiveTask(boardId: string, taskId: string): Observable<IBoard> {
    return this.http.post<IDataType>(
      `api/boards/${boardId}/tasks/${taskId}/archive`,
      {},
      { withCredentials: true }
    ).pipe(
      map(data => data.board!),
      catchError(this._catchError)
    );
  }

  addComment(boardId: string, taskId: string, comment: string): Observable<IBoard> {
    return this.http.post<IDataType>(
      `api/boards/${boardId}/tasks/${taskId}/comments`, 
      { comment },
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }

  deleteComment(boardId: string, taskId: string, commentId: string): Observable<IBoard> {
    return this.http.delete<IDataType>(
      `api/boards/${boardId}/tasks/${taskId}/comments/${commentId}`,
      { withCredentials: true }
    ).pipe( map(this._mapRequest), catchError(this._catchError) );
  }
}
