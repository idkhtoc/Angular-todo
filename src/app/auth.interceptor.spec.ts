import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './services/auth.service';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor,
      AuthService
    ],
    imports: [
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({ 
        positionClass: 'toast-bottom-right'
      })
    ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
