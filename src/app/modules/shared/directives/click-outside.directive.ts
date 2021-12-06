import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() private clickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement) {
    const clickedInside: boolean = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) this.clickOutside.emit();
  }
}
