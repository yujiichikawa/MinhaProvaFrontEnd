import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <h2>Atividade01</h2>
    <app-contador-component></app-contador-component>
    <h2>Atividade02 e Atividade 03</h2>
    <app-list-itens></app-list-itens>
    <h2>Atividade04</h2>

    <h2>Atividade05</h2>

    <h2>Atividade06</h2>
    <app-componente-pai></app-componente-pai>
    <h2>Atividade07</h2>
    <app-form-login></app-form-login>
    <h2>Atividade08</h2>
    <app-dados-alunos></app-dados-alunos>
  `,
  styles: []
})
export class AppComponent {
  title = 'MinhaProvaFrontEnd';
}
