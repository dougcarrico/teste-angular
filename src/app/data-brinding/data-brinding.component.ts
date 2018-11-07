import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-brinding',
  templateUrl: './data-brinding.component.html',
  styleUrls: ['./data-brinding.component.sass']
})
export class DataBrindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://via.placeholder.com/150';



  getValor(){
    return 3;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
