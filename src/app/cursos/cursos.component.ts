import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  nomePortal: string ;

  // cursos: string[] = ['JavaScript', 'HTML', 'CSS'];
  cursos;

  palavras;

  bananas: string[] = ['banana1', 'banana2', 'banan3'];

constructor(private cursosService: CursosService){

  this.nomePortal = "http://www.dougcarrico.com.br";
  
  this.palavras = this.cursosService.getPalavras();

  this.cursos = this.cursosService.getCursos();


}

}
