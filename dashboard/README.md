# Relatório de Vendas

Este projeto foi desenvolvido com o Angular CLI versão 16.2.2.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você modificar algum dos arquivos de origem.

## Estrutura do Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Executando Testes de Unidade

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Executando Testes de Ponta a Ponta

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar esse comando, você precisa primeiro adicionar um pacote que implemente as capacidades de teste de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda com o Angular CLI, use `ng help` ou consulte a [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).

## Estrutura do Projeto

Este projeto contém um componente chamado "Sales Report" que exibe um painel de vendas com gráficos e informações relacionadas a categorias, produtos e marcas de vendas.

### Principais Arquivos

- **docker-compose.yml**: Arquivo de configuração para executar o aplicativo com Docker.
- **package.json**: Arquivo de configuração do Node.js com informações sobre dependências e scripts de execução.
- **sales-report.component.html**: Modelo HTML para o componente de relatório de vendas.
- **sales-report.component.css**: Estilos CSS para o componente de relatório de vendas.
- **sales-report.component.ts**: Lógica TypeScript para o componente de relatório de vendas.
- **readme.md**: Este arquivo, fornecendo informações sobre o projeto.

## Dependências

### Dependências de Produção

- **@angular/animations:** 16.2.0
- **@angular/common:** 16.2.0
- **@angular/compiler:** 16.2.0
- **@angular/core:** 16.2.0
- **@angular/forms:** 16.2.0
- **@angular/platform-browser:** 16.2.0
- **@angular/platform-browser-dynamic:** 16.2.0
- **@angular/router:** 16.2.0
- **chart.js:** 4.4.0
- **rxjs:** ~7.8.0
- **tslib:** 2.3.0
- **zone.js:** ~0.13.0

### Dependências de Desenvolvimento

- **@angular-devkit/build-angular:** 16.2.2
- **@angular/cli:** ~16.2.2
- **@angular/compiler-cli:** 16.2.0
- **@types/jasmine:** ~4.3.0
- **jasmine-core:** ~4.6.0
- **karma:** ~6.4.0
- **karma-chrome-launcher:** ~3.2.0
- **karma-coverage:** ~2.2.0
- **karma-jasmine:** ~5.1.0
- **karma-jasmine-html-reporter:** ~2.1.0
- **typescript:** ~5.1.3

### Executando o Projeto com Docker

Para executar este projeto usando Docker, use o arquivo de configuração `docker-compose.yml`. Certifique-se de ter o Docker instalado e, em seguida, execute:

```bash
docker-compose up

Acesse o aplicativo em http://localhost:4200/.
```

## Pré-visualização do Projeto

<img src="https://github.com/joaopauloaramuni/angular/blob/main/dashboard/img/angular.png?raw=true"/>
