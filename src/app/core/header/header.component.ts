import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn?: Observable<boolean>;
  url: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn$;
    
    this.router.events.pipe(
      filter((e: any) => e instanceof NavigationEnd)  
    ).subscribe((e: NavigationEnd) => {
      this.url = e.url;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  back(): void {
    this.router.navigateByUrl('/boards');
  }

}
