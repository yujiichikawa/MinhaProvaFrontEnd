import { Component, Input } from '@angular/core';

interface InterfaceProduto{
  id:string,
  nome:string,
  serie:string,
  valor:string
}

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.css']
})
export class ListItensComponent {
  public produtos:InterfaceProduto[];
  public cadastro:boolean; 
  public deletar:boolean; 

  constructor() { this.cadastro = false;this.deletar = false;this.produtos = []}

  ngOnInit() {}

  getAll():Array<InterfaceProduto>
  {
    return this.produtos;
  }
  add():void{
    if(this.deletar == false){
      if(this.cadastro!=false){
        this.cadastro = false;
      }else{
        this.cadastro = true;
      }
    }
  }
  delete():void{
    if(this.cadastro == false){
      if(this.deletar!=false){
        this.deletar = false;
      }else{
        this.deletar = true;
      }
    }
  }

/*  produtos = [
    {
      id:1,
      nome:'Smartphone',
      serie:'07953766426',
      valor: '1.500R$'
    },
    {
      id:2,
      nome:'Notebook',
      serie:'08564746624',
      valor: '3.500R$'
    },
    {
      id:3,
      nome:'Console de Jogos',
      serie:'083455654524',
      valor: '4.000R$'
    },
    {
      id:4,
      nome:'SmartWatch',
      serie:'43526789247',
      valor: '5.500R$'
    },
    {
      id:5,
      nome:'Phone de ouvido',
      serie:'0887655456624',
      valor: '3.500R$'
    },
    {
      id:6,
      nome:'Air Fryers',
      serie:'467519825486',
      valor: '500R$'
    },
    {
      id:7,
      nome:'TV Led 50',
      serie:'86708568944',
      valor: '13.000R$'
    }
  ]
  this.produtos.push({...this.produtos})
  */  
}
