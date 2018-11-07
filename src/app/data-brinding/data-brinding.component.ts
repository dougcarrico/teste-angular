import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-brinding',
  templateUrl: './data-brinding.component.html',
  styleUrls: ['./data-brinding.component.scss']
})
export class DataBrindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://via.placeholder.com/150';
  value = 0;
  letra: string;
  valorSalvo:string;
  isMouseOver: boolean = false;

  getValor(){
    return 3;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('botão clicado!')
  }

  apertado(evento: KeyboardEvent){
    console.log(evento.key);
    this.letra = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
