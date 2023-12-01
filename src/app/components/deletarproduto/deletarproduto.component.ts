import { Component, Input } from '@angular/core';
import { ListItensComponent } from '../list-itens/list-itens.component';

interface InterfaceProduto{
  id:string,
  nome:string,
  serie:string,
  valor:string
}

@Component({
  selector: 'app-deletarproduto',
  templateUrl: './deletarproduto.component.html',
  styleUrls: ['./deletarproduto.component.css']
})
export class DeletarprodutoComponent {
  public id:string;
  @Input() listItens: InterfaceProduto[];

  constructor() { this.id = "";this.listItens = [];}

  ngOnInit() {}
  excluir():void{
    this.listItens.forEach((value,index)=>{
      if(this.id === value.id){
        this.listItens.splice(index, 1);
      }
    })
  }
}
