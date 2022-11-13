import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColumnColorDirective } from './column-color.directive';

@Component({
  template: `
    <div
      appColumnColor
      color="#000"
    ></div>
  `
})
class TestComponent { }

describe('ColumnColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement; 

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ ColumnColorDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    el = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    const directive = new ColumnColorDirective(el);
    expect(directive).toBeTruthy();
  });

  it('should have color applied for box-shadow and title', () => {
    const directive = el.injector.get(ColumnColorDirective);
    const el1 = el.nativeElement.querySelector('.tasks-content');
    const el2 = el.nativeElement.querySelector('h2');

    expect(el1.style.boxShadow).toBeFalsy();
    expect(el2.style.color).toBeFalsy();

    directive.setStyles();

    const color = directive.toRgb(directive.color);

    expect(el1.style.boxShadow).toBe(`0 0 10px 8px rgba(${color}, .3)`);
    expect(el2.style.color).toBe(`rgba(${color}, .7)`);
  });
});
