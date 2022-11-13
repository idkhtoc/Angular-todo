import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColumnColor]'
})
export class ColumnColorDirective implements OnInit, OnChanges {

  @Input() color: string;

  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
    this.setStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.setStyles();
    }
  }

  toRgb(hex: string) {
    const rgb = hex.slice(1).match(/.{1,2}/g)!;

    return `${parseInt(rgb[0], 16)}, ${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}`;
  }

  setStyles() {
    const color = this.toRgb(this.color || '#50a0a5');
    const boxShadow = `0 0 10px 8px rgba(${color}, .3)`;
  
    this.ref.nativeElement.querySelector('.tasks-content').style.boxShadow = boxShadow;
    this.ref.nativeElement.querySelector('h2').style.color = `rgba(${color}, .7)`;
  }
}
