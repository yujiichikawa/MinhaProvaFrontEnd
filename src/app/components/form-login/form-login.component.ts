import { Component } from '@angular/core';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public logado:boolean;
  public email:string;
  public senha:string;

  constructor(){this.email="";this.senha="";this.logado=false;}

  ngOnInit() {}

  login():void{
      this.logado = true;
  }

}
