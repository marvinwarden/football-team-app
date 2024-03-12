import { MovePlayerDirective } from './move-player.directive';
import { ElementRef } from '@angular/core';

describe('MovePlayerDirective', () => {
  const mockElementRef = {
    nativeElement: document.createElement('div') // Mocking nativeElement
  };
  it('should create an instance', () => {
    const directive = new MovePlayerDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
