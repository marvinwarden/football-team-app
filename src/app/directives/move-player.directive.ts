import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovePlayer]'
})
export class MovePlayerDirective {

  private initialMouseX: number = 0;
  private initialMouseY: number = 0;
  private initialElementX: number = 0;
  private initialElementY: number = 0;
  private isDragging: boolean = false;

  constructor(private el: ElementRef) { }
  

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialMouseX = event.clientX;
    this.initialMouseY = event.clientY;
    this.initialElementX = this.el.nativeElement.offsetLeft;
    this.initialElementY = this.el.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const offsetX = event.clientX - this.initialMouseX;
      const offsetY = event.clientY - this.initialMouseY;
      this.el.nativeElement.style.left = this.initialElementX + offsetX + 'px';
      this.el.nativeElement.style.top = this.initialElementY + offsetY + 'px';
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
  
      this.isDragging = false; // Ensure that isDragging is set to false when mouse is released

  }
}



