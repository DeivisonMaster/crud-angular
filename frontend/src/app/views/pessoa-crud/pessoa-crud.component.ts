import { HeaderService } from './../../components/template/header/header.service';
import { PessoaService } from './../../components/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-crud',
  templateUrl: './pessoa-crud.component.html',
  styleUrls: ['./pessoa-crud.component.scss']
})
export class PessoaCrudComponent implements OnInit {

  constructor(private pessoaService: PessoaService, private rota: Router, private headerService: HeaderService){
    headerService.header = {
      titulo: 'Cadastro de Pessoas',
      icone: 'storefront',
      rotaURL: '/pessoas'
    }
  }

  ngOnInit(): void {
  }

  navTelaCadastroPessoa(): void{
    this.rota.navigate(['/pessoas/inserir']);
  }

  
}
