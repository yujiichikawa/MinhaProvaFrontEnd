import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.css']
})

export class ContadorComponentComponent {
 
  public contador:number;
  constructor() { this.contador = 0; }

  ngOnInit() { }

  soma():void{
    this.contador = this.contador+1;
  }
  subtracao():void{
    if(this.contador == 0){
    }else{
      this.contador = this.contador-1;
    }
    
  }
}
