import { PessoaListaDataSource } from './pessoa-lista-datasource';
import { Pessoa } from './../pessoa.model';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.scss']
})
export class PessoaListaComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Pessoa>;
  pessoas!: Pessoa[];

  dataSource!: PessoaListaDataSource;
  colunasVisiveis = ['id', 'nome', 'idade', 'numero', 'cep', 'rua', 'cidade', 'estado', 'acao']

  constructor(private pessoaService: PessoaService){
    this.dataSource = new PessoaListaDataSource();
    console.log(this.dataSource);
  }

  ngOnInit(): void {
    this.pessoaService.listar().subscribe(pessoas => {
      this.pessoas = pessoas;
      console.log(this.pessoas);
    });
  }

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
