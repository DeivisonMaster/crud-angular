import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-excluir',
  templateUrl: './pessoa-excluir.component.html',
  styleUrls: ['./pessoa-excluir.component.scss']
})
export class PessoaExcluirComponent implements OnInit{

  pessoa!: Pessoa;

  constructor(
    private pessoaService: PessoaService, 
    private rota: Router, 
    private rotaView: ActivatedRoute){}

  ngOnInit(): void {
      const id = this.rotaView.snapshot.paramMap.get("id");
      this.pessoaService.buscaPorId(+id!).subscribe(pessoa => {
        this.pessoa = pessoa;
      });
  }

  navListagem(): void{
    this.rota.navigate(['/pessoas']);
  }

  excluir(): void{
    this.pessoaService.excluir(+this.pessoa.id!).subscribe(() =>{
      this.pessoaService.exibeMensagem("Cadastro excluido com sucesso!");
      this.navListagem();
    })
  }

  cancelar(): void{
    this.navListagem();
  }

}
