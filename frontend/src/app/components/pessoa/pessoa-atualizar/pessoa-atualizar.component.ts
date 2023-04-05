import { Endereco } from './../endereco.model';
import { Pessoa } from './../pessoa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pessoa-atualizar',
  templateUrl: './pessoa-atualizar.component.html',
  styleUrls: ['./pessoa-atualizar.component.scss']
})
export class PessoaAtualizarComponent implements OnInit {
  pessoa!: Pessoa;

  constructor(
    private pessoaService: PessoaService, 
    private rota: Router,
    private rotaView: ActivatedRoute,
    private painelMsg: MatSnackBar){}

  ngOnInit(): void {
    const id = this.rotaView.snapshot.paramMap.get("id");
      this.pessoaService.buscaPorId(+id!).subscribe(pessoa => {
        this.pessoa = pessoa;
      });
  }

  navListagem(): void{
    this.rota.navigate(['/pessoas']);
  }

  pesquisarCEP(): void{

  }

  atualizar(): void{
    this.pessoaService.atualizar(this.pessoa).subscribe(() => {
      let config = new MatSnackBarConfig();
      config.duration = 3000;
      config.panelClass = ['msg-sucesso'];
      config.horizontalPosition = "right";
      config.verticalPosition = "top";
      this.painelMsg.open("Cadastro atualizado com sucesso!", "X", config);

      this.navListagem();
    });
  }

  cancelar(): void{
    this.navListagem();
  }
}
