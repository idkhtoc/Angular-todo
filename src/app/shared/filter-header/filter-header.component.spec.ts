import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DelayedInputModule } from 'src/app/directives/delayed-input/delayed-input.module';
import { AllFilter, Filter, FilterType, Status } from 'src/app/models/Filter';

import { FilterHeaderComponent } from './filter-header.component';

describe('FilterHeaderComponent', () => {
  let component: FilterHeaderComponent;
  let fixture: ComponentFixture<FilterHeaderComponent>;
  let h2: DebugElement;
  let openBtns: DebugElement[];
  let search: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterHeaderComponent ],
      imports: [
        DelayedInputModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterHeaderComponent);
    component = fixture.componentInstance;
    h2 = fixture.debugElement.query(By.css('h2'));
    search = fixture.debugElement.query(By.css('input[type="search"]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive title and render it', () => {
    component.title = 'test';

    fixture.detectChanges();
  
    expect((h2.nativeElement as HTMLElement).textContent).toEqual('test');
  });

  it('should receive filterType boards and render content based on this value', () => {
    component.filterType = FilterType.boards;

    fixture.detectChanges();

    openBtns = fixture.debugElement.queryAll(By.css('button.open'));

    expect(openBtns[0]).toBeFalsy();
    expect(openBtns[1]).toBeFalsy();
    expect(fixture.debugElement.query(By.css('button.add'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('button.delete'))).toBeFalsy()
    expect(fixture.debugElement.query(By.css('optgroup'))).toBeTruthy();
  });

  it('should receive filterType types and render content based on this value', () => {
    component.filterType = FilterType.tasks;

    fixture.detectChanges();

    openBtns = fixture.debugElement.queryAll(By.css('button.open'));

    expect(openBtns[0]).toBeTruthy();
    expect(openBtns[1]).toBeTruthy();
    expect(fixture.debugElement.query(By.css('button.add'))).toBeFalsy();
    expect(fixture.debugElement.query(By.css('button.delete'))).toBeTruthy()
    expect(fixture.debugElement.query(By.css('optgroup'))).toBeFalsy();
  });

  it('should send output for openDescModalEvent', () => { 
    let modalOpen: boolean = false;

    component.openDescModalEvent.subscribe(() => modalOpen = true);

    component.openDescModal();

    expect(modalOpen).toBeTrue();
  });

  it('should send output for openArchiveModalEvent', () => { 
    let modalOpen: boolean = false;

    component.openArchiveModalEvent.subscribe(() => modalOpen = true);

    component.openArchiveModal();

    expect(modalOpen).toBeTrue();
  });

  it('should send output for openAddModalEvent', () => { 
    let modalOpen: boolean = false;

    component.openAddModalEvent.subscribe(() => modalOpen = true);

    component.openAddModal();

    expect(modalOpen).toBeTrue();
  });

  it('should send output for selectFilterValueEvent', () => {
    let filter: AllFilter = Filter.name;

    component.selectFilterValueEvent.subscribe((value: AllFilter) => filter = value);

    component.selectFilterValueEvent.next(Status.TD);

    expect(filter).toBe(Status.TD);
  });

  it('should send output for selectDirectionValueEvent', () => {
    let direction: boolean = false;

    component.selectFilterDirectionEvent.subscribe(value => direction = value);

    component.selectFilterDirectionEvent.next(true);

    expect(direction).toBeTrue();
  });
});
