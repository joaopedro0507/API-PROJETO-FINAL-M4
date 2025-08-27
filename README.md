📦 PF-M4

API para gerenciamento de denúncias antirracismo, desenvolvida em Node.js seguindo o padrão MVC.
O objetivo é oferecer uma estrutura organizada para cadastrar, listar, atualizar e remover denúncias de forma simples e escalável.

Destinado a desenvolvedores e aplicações que necessitam de uma API REST básica para manipulação de dados de denúncias.

🏗️ Arquitetura MVC

Este projeto segue a arquitetura Model-View-Controller (MVC):

Model → responsável pela estrutura dos dados e interação com o "banco de dados" (inicialmente um array).

View → neste projeto, são as respostas em JSON enviadas ao cliente.

Controller → contém a lógica da aplicação (criar, listar, atualizar, deletar denúncias).

Routes → direcionam as requisições para os controllers corretos.

📂 Estrutura de pastas do projeto
📂 PF-M4
 ┣ 📂 controllers   # Lógica das requisições (denúncias)
 ┣ 📂 models        # Estruturas e simulação do banco de dados
 ┣ 📂 routes        # Definição das rotas
 ┣ 📂 views         # (opcional) Respostas em JSON
 ┗ 📜 app.js        # Arquivo principal da aplicação
 ┣ 📜 package.json
 ┗ 📜 README.md

🚀 Tecnologias utilizadas

Node.js

Express

Nodemon
 (para desenvolvimento)

⚙️ Instalação e uso
1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/PF-M4.git
cd PF-M4

2. Instalar dependências
npm install

3. Rodar servidor em ambiente de desenvolvimento
npm run dev


Servidor rodando em: http://localhost:3000
 🚀

📡 Rotas principais
Método	Rota	Descrição
GET	/denuncias	Lista todas as denúncias
POST	/denuncias	Cria uma nova denúncia
PUT	/denuncias/:id	Atualiza uma denúncia por ID
DELETE	/denuncias/:id	Remove uma denúncia por ID
😺 Authors

Kauanny 

Luana

Ághata

Erick

João Pedro

Júlia
