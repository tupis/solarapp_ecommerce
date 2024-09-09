# SolarAPP E-commerce

Um projeto de e-commerce para energia solar, com funcionalidades completas para gerenciamento de produtos e compras online.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js(Versão 18+)](https://nodejs.org/en/), [Docker](https://www.docker.com/).
Além disto, é recomendável ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🔧 Instalação e Execução

Etapas:

1. Clone este repositório

<code>git clone git@github.com:tupis/solarapp_ecommerce.git</code>

2. Acesse a pasta do projeto no terminal/cmd

<code>cd solarpp-ecommerce</code>

3. Instale as dependências

<code>npm install</code>

4. Execute o projeto em modo de desenvolvimento

<code>docker compose up -d</code>

5. Para rodar o projeto em modo de produção, utilize o comando:

<code>docker compose -f "docker-compose.prod.yaml" up -d --build</code>

- **Obs**: O servidor inciará na porta: **3000** - acesse <http://localhost:3000>

6. Para remover o container, execute o comando:

<code>docker compose down --rmi all -v</code>

## 📚 Funcionalidades

- [x] Ver todos os produtos disponíveis
- [x] Pesquisar produtos por nome, categoria, preço, marca
- [x] Ordenação por preço, vendidos, potência
- [x] Adicionar produtos ao carrinho e realizar checkout
- [x] Visualizar detalhes de cada produto
- [x] Lazy loading de produtos (páginação infinita)
- [x] Persistência de carrinho com localstorage

## 🛠️ Construído com

Principais tecnologias usadas neste projeto:

- [TypeScript](https://www.typescriptlang.org/docs/) - Linguagem de programação
- [React](https://pt-br.reactjs.org/docs/getting-started.html) - Biblioteca web usada
- [Next](https://nextjs.org/docs) - Framework do React
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - Estrutura CSS de código aberto
- [Docker](https://www.docker.com/) - Plataforma de containerização

## 📄 Licença

Este projeto está sob a licença MIT.

## ✒ Desenvolvedor

<a href="https://github.com/tupis">
  <img src="https://user-images.githubusercontent.com/95971013/183971745-f895f523-b707-4811-ba0e-d81409ca2205.jpg" width="300px;" alt=""/>
 <br />
 <sub><b>João Tupinambá</b></sub>
</a> 
<a href="https://github.com/tupis" title="Github">🚀</a>

Desenvolvido com ❤️ por João Tupinambá, mais conhecido como "Tupi". 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Tupi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joaotupinamba)](https://www.linkedin.com/in/joaotupinamba/)
[![Gmail Badge](https://img.shields.io/badge/-joaoh.tupinamba@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:joaoh.tupinamba@gmail.com)
