import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-component',
  templateUrl: './doug-teste.component.html',
  styleUrls: ['./doug-teste.component.scss']
})
export class DougTesteComponent implements OnInit {
isOn: boolean = false;

sliderOn(){
  if(!this.isOn){
    this.isOn = true;
  }else{
    this.isOn = false;
  }
  
}

  constructor() { }

  ngOnInit() {
  }

}
