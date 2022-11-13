import { Component, DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DelayedInputDirective } from './delayed-input.directive';

@Component({
  template: `
    <input 
      type="text" 
      name="text" 
      id="text" 
      appDelayedInput
      (delayedInput)="search($event)"
      [delayTime]="600"
    >
  `
})
class TestComponent { }

describe('DelayedInputDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement; 

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ DelayedInputDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    el = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new DelayedInputDirective(el);
    expect(directive).toBeTruthy();
  });

  it('should be provided to an input', () => {
    const directive = el.injector.get(DelayedInputDirective);

    expect(directive).toBeTruthy();
    expect(directive.delayedInput).toBeInstanceOf(EventEmitter);
    expect(directive.delayTime).toBeInstanceOf(Number);
  });

  it('should get value from input with provided ms', fakeAsync(() => {
    const input = el.nativeElement as HTMLInputElement;
    const directive = el.injector.get(DelayedInputDirective);
    
    spyOn(directive, 'ngOnInit').and.callThrough();

    fixture.detectChanges();

    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    
    tick(600);
    fixture.detectChanges();
    
    expect(input.value).toBe('test');
  }));
});
