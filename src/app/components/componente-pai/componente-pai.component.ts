import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  public nomes:string[];
  constructor() {this.nomes = []}

  ngOnInit() {
    this.nomes = ["Thiago Yuji","Tiago Tenório","Vicente Tavares","Alisson","Ruan","Fred"];
  }

}
