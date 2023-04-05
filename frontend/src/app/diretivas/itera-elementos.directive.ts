import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[iteraElementosDir]'
})
export class IteraElementosDirective implements OnInit {

  @Input('iteraElementosDirEm') numeros!: number[];
  @Input('iteraElementosDirUsando') texto!: string;

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {}

  ngOnInit(): void {
    for(let num of this.numeros){
      this.container.createEmbeddedView(this.template, {$implicit: num});
    }
  }
}
