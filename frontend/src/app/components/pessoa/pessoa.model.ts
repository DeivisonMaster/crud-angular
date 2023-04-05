import { Endereco } from './endereco.model';
export interface Pessoa{
    id?: number
    nome: string
    idade: number
    endereco: Endereco
}