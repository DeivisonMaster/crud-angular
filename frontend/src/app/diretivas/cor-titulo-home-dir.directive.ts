import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[estiloCorDir]'
})
export class CorTituloHomeDirDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#222';
  }

}
