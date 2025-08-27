

API para **gerenciamento de denúncias antirracismo**, desenvolvida em **Node.js** seguindo o padrão **MVC**.
O objetivo é oferecer uma estrutura organizada para **cadastrar**, **listar**, **atualizar** e **remover denúncias** de forma simples e escalável.

Destinado a desenvolvedores e aplicações que necessitam de uma **API REST básica** para manipulação de dados de denúncias.

---

## &#x20;Arquitetura MVC

Este projeto segue a arquitetura **Model-View-Controller (MVC)**:

* **Model** → responsável pela estrutura dos dados e interação com o "banco de dados" (inicialmente um array).
* **View** → neste projeto, são as respostas em **JSON** enviadas ao cliente.
* **Controller** → contém a lógica da aplicação (criar, listar, atualizar, deletar denúncias).
* **Routes** → direcionam as requisições para os controllers corretos.

---

## &#x20;Estrutura de pastas do projeto

```bash
📂 PF-M4
 ┣ 📂 controllers   # Lógica das requisições (denúncias)
 ┣ 📂 models        # Estruturas e simulação do banco de dados
 ┣ 📂 routes        # Definição das rotas
 ┣ 📂 views         # (opcional) Respostas em JSON
 ┗ 📜 app.js        # Arquivo principal da aplicação
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## &#x20;Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Nodemon](https://nodemon.io/) (para desenvolvimento)

---

## &#x20;Instalação e uso

### 1. Clonar o repositório

```bash
git clone https://github.com/joaopedro0507/PROJETO-FINAL-M4.git
cd PROJETO-FINAL-M4
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar servidor em ambiente de desenvolvimento

```bash
npm run dev
```

Servidor rodando em: **[http://localhost:3000](http://localhost:3000)**

---

## &#x20;Rotas principais

| Método | Rota             | Descrição                    |
| ------ | ---------------- | ---------------------------- |
| GET    | `/denuncias`     | Lista todas as denúncias     |
| POST   | `/denuncias`     | Cria uma nova denúncia       |
| PUT    | `/denuncias/:id` | Atualiza uma denúncia por ID |
| DELETE | `/denuncias/:id` | Remove uma denúncia por ID   |

---

## &#x20;Authors

* Kauanny Moreira
* Luana
* Ághata
* Erick
* João Pedro
* Júlia
