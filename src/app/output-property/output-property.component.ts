import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador-component',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input()  valor:number = 0;

  @Output() mudouValor = new EventEmitter();


  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }


  constructor() { }

  ngOnInit() {
  }

}
