import { Endereco } from './../endereco.model';
import { Pessoa } from './../pessoa.model';
import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-inserir',
  templateUrl: './pessoa-inserir.component.html',
  styleUrls: ['./pessoa-inserir.component.scss']
})
export class PessoaInserirComponent implements OnInit{

  endereco: Endereco = {
      numero: 0,
      cep: '',
      rua: '',
      cidade: '',
      estado: ''
  }

  pessoa: Pessoa = {
    nome: '',
    idade: 0,
    endereco: this.endereco
  }

  constructor(private pessoaService: PessoaService, private rota: Router){}

  ngOnInit(): void {
  }

  salvar(): void{
    this.pessoaService.salvar(this.pessoa).subscribe(() => {
        this.pessoaService.exibeMensagem("Produto salvo com sucesso!");
        this.rota.navigate(['/pessoas']);
    });
  }

  pesquisarCEP(): void{
    this.pessoaService.pesquisarCEP(this.endereco.cep).subscribe(() => {
      this.pessoaService.exibeMensagem("CEP encontrado com sucesso!");
    });
  }

  cancelar(): void{
    this.rota.navigate(['/pessoas']);
  }
}
