# Guia de Configuração do Projeto

Este guia fornecerá instruções passo a passo para configurar o ambiente de desenvolvimento e o banco de dados para o projeto.

## Configurando o Ambiente de Desenvolvimento

Certifique-se de que o seu ambiente de desenvolvimento esteja configurado corretamente:

1. **[Clone do repositório:](https://github.com/viniciusaraldi/reajuste_preco_teste.git)**

2. **Navegue até a pasta do back-end e Instale as dependências e depois re-faça para a pasta do front-end:**
  cd .\back-end\
  npm i

Isso instalará todas as dependências necessárias para o projeto.
Para rodar ambos, precisa-se colocar o seguinte código de linha: 
  npm run dev

## Configurando o Banco de Dados MySQL

Para configurar o banco de dados MySQL, siga estas etapas:

1. **Instale o XAMPP:**

Faça o download do XAMPP em [https://www.apachefriends.org/pt_br/index.html](https://www.apachefriends.org/pt_br/index.html).

![XAMPP](https://github.com/viniciusaraldi/reajuste_preco_teste/assets/64990816/28f2e6c4-06ae-44d2-b815-1cb1c6b1635d)

2. **Instale o MySQL (Versão 8):**

Faça o download do MySQL em [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/).

3. **Acesse o MySQL local com suas credenciais.**

4. **Crie um Banco de Dados com o nome: "projeto_ajuste_preco".**

Agora o banco de dados está pronto para ser usado.


## Migrações e Sementes Node.js:

Para enviar as migrações e as "sementes" para o banco de dados, siga estas etapas:

**Certifique-se de estar no diretório correto: `../reajuste_preco_teste/back-end/src`.**

1. **Execute o comando para migrar as tabelas para o banco de dados:**

  npx sequelize-cli db:migrate (Para jogar as tabelas no banco);
  npx sequelize-cli db:seed:all (Para jogar os dados para o banco);


Com essas etapas concluídas, os dados estão prontos para serem manipulados e acessados no projeto.
Agora você está pronto para começar a trabalhar no projeto!


