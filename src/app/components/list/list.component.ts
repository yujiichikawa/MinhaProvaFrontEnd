import { Component, Input } from '@angular/core';

interface InterfaceProduto{
  id:string,
  nome:string,
  serie:string,
  valor:string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() listItens: InterfaceProduto[];
  
  constructor() {this.listItens = []}

  ngOnInit() {}

  getAll():Array<InterfaceProduto>
  {
    return this.listItens;
  }
  check(){
    
  }
}
