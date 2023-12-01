import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface InterfaceAluno{
  matricula: number,
  nome: string,
  idade: number,
  curso: string,
  rendimentoEscolar: {
    POO: number,
    Frontend: number,
    Backend: number
  }
}
@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent {
    private apiUrl = 'http://localhost:3000/aluno';
    media:number;
    alunos:InterfaceAluno[] = [];

    constructor(private http: HttpClient){
      this.getAlunoApi();
      this.media = 0.0;
      
    }

    ngOnInit() {}

    getAlunoApi():void{
      this.http.get<InterfaceAluno[]>(this.apiUrl).subscribe((alunos)=>{this.alunos = alunos});

      this.alunos.forEach(element => {
       this.media = Number(element.rendimentoEscolar.POO) + Number(element.rendimentoEscolar.Frontend)/3;
      });
    }

}
