## Build
Executar 'ng build' para gerar uma build do projeto para o diretorio dist/

# Arquitetura
O projeto é um CRUD de Pessoas. 
O diretório backend contém a API baseada no json-server. 
Json Server disponibiliza um mock de API para testes rápidos

O diretório front-end possui o cliente Angular que consome esta API.

O modelo de negócio é baseado no cadastro de Pessoas e Endereços. Cada Pessoa possui um endereço vinculado no cadastro
O usuário do sistema lista, cria, atualiza, edita e exclui cadastros.

# Execução
- Node.js instalado
- Instalar Angular CLI
    npm i -g @angular/cli
- Editor ex: VS Code

# backend
1. acessar o diretório raiz backend e via linha de comando executar: npm start 
Acessivel em: http://localhost:3002/pessoas 

# frontend
2. Executar 'ng serve' para compilar o projeto. Acessivel em http://localhost:4200/ 

# Tecnologias
Angular
Json-server
Material Design
SASS

# Arquitetura
MVVM 

# Recursos Utilizados
Pipes
Diretiva de atributo
Diretiva de comportamento
Two way data binding
One way data binding
Router
Observable (rxjs)
Exception




