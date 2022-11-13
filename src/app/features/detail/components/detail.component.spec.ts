import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { DelayedInputModule } from 'src/app/directives/delayed-input/delayed-input.module';
import { DescriptionPipeModule } from 'src/app/pipes/description-pipe/description-pipe.module';
import { FilterPipeModule } from 'src/app/pipes/filter-pipe/filter-pipe.module';
import { DetailService } from 'src/app/services/detail.service';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { } },
    params: { subscribe: () => {} }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers: [ 
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        DetailService
      ],
      imports: [
        FilterPipeModule,
        FormsModule,
        DelayedInputModule,
        DescriptionPipeModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({ 
          positionClass: 'toast-bottom-right'
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
