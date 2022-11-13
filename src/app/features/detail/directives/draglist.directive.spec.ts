import { HttpClient } from '@angular/common/http';
import { Component, DebugElement, Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BoardsService } from 'src/app/services/boards.service';
import { DetailService } from 'src/app/services/detail.service';
import { HttpService } from 'src/app/services/http.service';
import { DraglistDirective } from './draglist.directive';

@Injectable()
class TestService {
  
  constructor() {}

}

@Component({
  template: `
  `
})
class TestComponent { }

describe('DraglistDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement; 

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ DraglistDirective, TestComponent],
      providers: [
        TestService
      ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new DraglistDirective(new TestService() as DetailService);
    expect(directive).toBeTruthy();
  });
});
