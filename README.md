# API Twitter 2.0

## Introdução

Essa API tem a finalidade de salvar os dados tal qual a API do Twitter, ao qual teremos as rotas
Seguidores, Seguindo, Tweet e Usuario, onde cada uma terá uma função tal como a plataforma
de rede social. Esse é a evolução do projeto 2 do módulo 4.

**_Melhoramentos:_**

- Swagger com endpoints mais organizados;
- JWT acrescentado autenticador com tempo determinado para expirar;
- Tabelas com relação Many-to-Many;
- Deploy no Heroku.

## Instalando Dependências

Para iniciar a aplicação, é necessário ter o NodeJS instalado na máquina.
Se atentando a isso, basta ir no Prompt de Comando do Windows, dentro da pasta da API (faça antes
o download do zip do projeto e descompacte em qualquer pasta de sua máquina) e inicie o comando
abaixo:

```bash
$ npm install
```

Este código irá instalar todas as dependências necessárias para funcionar a aplicação.

## Rodando a API

Para rodar a API e utilizar de suas rotas, inicialize o comando abaixo:

```bash
$ npm run start
```

## Autenticação

Agora a autenticação terá um token que será gerado ao fazer o primeiro login (após o salvamento de seu login no database) e que terá duração pré definida, conforme configuração no arquivo

`````
.env.bkp
````.

## Rotas ##

Esta API tem 3 rotas. A seguir iremos tratar cada uma delas e como usá-las.


### Rota Usuario ###

Nesta rota será tratado a autenticação do usuário e também os dados da pessoa. Nesta rota você
poderá cadastrar um e-mail e senha para poder entrar na aplicação e também nome, imagem, bio e
nascimento. Abaixo temos o modelo de cadastro.

```bash
{
	"nome": "Joaozinho23,
	"imagem": "https://www.drive.com.br",
	"bio": "Só sei que nada sei",
	"nascimento': "15/12/1998",
	"email": "seuemail@email.com",
	"senha": "senha123",
}
`````

Da mesma forma podemos atualizar e excluir os dados cadastrados, bastando acessar a rota
"usuario" e alterando os dados e o tipo de rota.

### Rota Tweet

Nesta rota temos o corpo da mensagem propriamente dito, conforme modelo abaixo:

```bash
{
	"texto": "Loren ypson",
	"emoji": ":/",
	"curtidas" "50",
	"data_postagem": "01/01/22",
}
```

### Rota Seguindo

Rota contendo quem o usuário está seguindo na rede social.

```bash
{
	"idSeguindo": "xpto"
}
```

### Rota Seguidores

Igual a rota anterior, só que mostrando quem está seguindo o usuário.

```bash
{
	"idSeguidores": "xpto"
}
```

## Considerações Finais

Este projeto teve o intuído de nos aprofundar mais no CRUD e também praticarmos as validações via JWT, com isso nos capacitando para criar APIs mais seguras e mais alinhadas
com o que o mercado utiliza. Quaisquer dúvida ou sugestão de melhoria, fique a vontade de criar uma Issue aqui neste Github.
