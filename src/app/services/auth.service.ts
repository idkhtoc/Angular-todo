import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Response {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  login(email: string, password: string) {
    this.http.post<Response>('api/auth/login', { email, password }, { withCredentials: true }).subscribe({
      next: data => {
        this.router.navigateByUrl('/');
        this.isLoggedIn.next(true);
        this.toastr.success(data.message);
      },
      error: res => this.toastr.error(res.error.message)
    });
  }

  register(email: string, password: string) {
    this.http.post<Response>('api/auth/register', { email, password }, { withCredentials: true }).subscribe({
      next: data => {
        this.router.navigateByUrl('/login');
        this.toastr.success(data.message);
      },
      error: res => this.toastr.error(res.error.message)
    });
  }

  logout() {
    this.http.post<Response>('api/auth/logout', {}, { withCredentials: true })
      .subscribe(data => {
        this.router.navigateByUrl('login');
        this.isLoggedIn.next(false);
      });
  }

  loggedIn() {
    this.http.get<Response>('api/auth', { withCredentials: true })
      .subscribe({
        next: () => this.isLoggedIn.next(true),
        error: () => this.isLoggedIn.next(false)
      });
  }
}
