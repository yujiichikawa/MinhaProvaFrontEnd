import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItensComponent } from './components/list-itens/list-itens.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { AdicionarprodutoComponent } from './components/adicionarproduto/adicionarproduto.component';
import { DeletarprodutoComponent } from './components/deletarproduto/deletarproduto.component';
import { ListComponent } from './components/list/list.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItensComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    DadosAlunosComponent,
    AdicionarprodutoComponent,
    DeletarprodutoComponent,
    ListComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    FormLoginComponent,
    AreaLogadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
