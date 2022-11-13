import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError( (error: HttpErrorResponse) => {
        if (this.authService.isLoggedIn.getValue()) {
          switch (error.status) {
            case 401:
            case 403:
              this.authService.logout();
              break;
            default:
              break;
          }
        }
        
        return throwError(() => error);
      })
    )
  }
}
