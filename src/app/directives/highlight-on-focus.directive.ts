import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() color = '';
  constructor(private el:ElementRef) { }

  @HostListener('focus') onFocus(){
    this.giveColor(this.color || 'yellow');
  }

  @HostListener('blur') onLoose(){
    this.giveColor('');
  }

  private giveColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
