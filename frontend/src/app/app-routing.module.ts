import { PessoaExcluirComponent } from './components/pessoa/pessoa-excluir/pessoa-excluir.component';
import { PessoaAtualizarComponent } from './components/pessoa/pessoa-atualizar/pessoa-atualizar.component';
import { PessoaInserirComponent } from './components/pessoa/pessoa-inserir/pessoa-inserir.component';
import { PessoaCrudComponent } from './views/pessoa-crud/pessoa-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pessoas",
    component: PessoaCrudComponent
  },
  {
    path: "pessoas/inserir",
    component: PessoaInserirComponent
  },
  {
    path: "pessoas/atualizar/:id",
    component: PessoaAtualizarComponent
  },
  {
    path: "pessoas/excluir/:id",
    component: PessoaExcluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
