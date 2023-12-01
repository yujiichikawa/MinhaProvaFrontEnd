import { Component, Input } from '@angular/core';
import { ListItensComponent } from '../list-itens/list-itens.component';
interface InterfaceProduto{
  id:string,
  nome:string,
  serie:string,
  valor:string
}

@Component({
  selector: 'app-adicionarproduto',
  templateUrl: './adicionarproduto.component.html',
  styleUrls: ['./adicionarproduto.component.css']
})
export class AdicionarprodutoComponent {
  public id:string;
  public nome:string;
  public serie:string;
  public valor:string;
  @Input() listItens: InterfaceProduto[];
  constructor() { this.id = "";this.nome = "";this.serie = "";this.valor = ""; this.listItens = []; }

  ngOnInit() { }

  cadastrar():void{ 
    this.listItens.push({id:this.id,nome:this.nome,serie:this.serie,valor:this.valor})
  }

}
