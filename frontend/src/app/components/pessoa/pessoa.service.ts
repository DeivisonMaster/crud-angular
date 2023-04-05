import { map } from 'rxjs/operators';
import { Pessoa } from './pessoa.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl = "http://localhost:3002/pessoas";
  urlCEP = "http://cep.republicavirtual.com.br/web_cep.php?cep=";

  constructor(private painelMsg: MatSnackBar, private clientHttp: HttpClient) { }

  exibeMensagem(msg: string, isErroOcorreu: boolean = false): void{
    this.painelMsg.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErroOcorreu ? ['msg-sucesso'] : ['msg-erro']
    });
  }

  salvar(pessoa: Pessoa): Observable<Pessoa>{
    return this.clientHttp.post<Pessoa>(this.baseUrl, pessoa).pipe(
        map((obj) => obj), 
        catchError((e) => this.trataErro(e)));
  }

  pesquisarCEP(cep: string): Observable<string>{
    const url = this.urlCEP + cep + "&formato=xml";
    console.log(url);
    return this.clientHttp.get<string>(url).pipe(
      map((obj) => obj), 
      catchError((e) => this.trataErro(e)));
  }

  listar(): Observable<Pessoa[]>{
    return this.clientHttp.get<Pessoa[]>(this.baseUrl);
  }

  buscaPorId(id: number): Observable<Pessoa>{
    const url = `${this.baseUrl}/${id}`;
    return this.clientHttp.get<Pessoa>(url);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa>{
    const url = `${this.baseUrl}/${pessoa.id}`;
    return this.clientHttp.put<Pessoa>(url, pessoa).pipe(
      map((obj) => obj), 
      catchError((e) => this.trataErro(e)));
  }

  excluir(id: number): Observable<Pessoa>{
    const url = `${this.baseUrl}/${id}`;
    return this.clientHttp.delete<Pessoa>(url).pipe(
      map((obj) => obj), 
      catchError((e) => this.trataErro(e)));
  }

  trataErro(e: any): Observable<any>{
    this.exibeMensagem("Ocorre um erro ao salvar o cadastro!", true);
    return EMPTY;
  }

}
