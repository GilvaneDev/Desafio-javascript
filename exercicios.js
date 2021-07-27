/*Easy
Nesse arquivo existem alguns desafios para:

Tipos de dados com javascript
Condicionais
Loops
Functions e arrow functions
Ao clicar no titulo você poderá ver um repositório auxiliar com exemplos da linguagem

Tipos de dados
Boolean
1º Declare uma variável chamada status onde ela receberá uma valor booleano qualquer. Após isso imprima Ativo caso o status seja verdadeiro e Desativado caso o status seja falso.

2º Em um sistema de gerenciamento de clientes existem dois tipos de usuários, usuário adminstrador e usuário comum. Para identificar qual o tipo de usuário está acessando a plataforma uma variável chamada administrador foi criada. Seu valor é do tipo booleano. Imprima na tela O usuário é administrador caso administrador seja verdadeiro e O usuário é comum caso administrador seja falso.

Number
1º Raul Seixas nasceu a 10.000 anos atrás e afirmou que não havia nada nesse mundo que ele não saiba demais. Crie uma variável que recebe a idade de um ser milenar e imprima "Não tem nada nesse mundo que eu não saiba demais" caso sua idade seja igual ou maior que 10.000 anos e imprima "Ainda existe muita coisa que eu não sei" caso sua idade seja menor que 10.000 nos.

2º João foi comprar um rango no mercado e levou consigo R$30.00. Lá ele comprou leite (R$4.50), pão (R$5.30) e mortadela (R$8,45). Crie uma variável que receberá o valor total de João e outras 3 chamada leite, pao e mortadela que receberá o seu valor respectivo. Em seguida subtraia o valor da compra do João do seu total e imprima na tela o valor gasto para ele e em seguida o seu troco.

3º O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura elevada (em metros) ao quadrado. Luana deseja automatizar esse processo e pediu sua ajuda. Para isso deve criar duas variáveis, uma para peso e outra para altura. Em seguida imprima na tela Seu IMC é: X onde no lugar de X aparecerá o IMC da pessoa.

String
1º Crie três variáveis (nome, sobrenome e profissão) e em seguida imprima a seguinte frase Oi sou o NOME SOBRENOME e trabalho com PROFISSÃO substituindo o valor das palavras em maiúsculo pelo valor das variáveis. Para esse exercício deve usar as três formas de declaração e concatenação de string (aspas simples, aspas duplas e template string)

2º Lucas queria saber qual de seus 15 irmãos tem o nome com a maior e a menor quantidade de letras. Para isso pediu ajuda para você criar um programa que receba um nome e imprima o tamanho do seu nome.

3º Ricardo tem uma plataforma de usuários e gostaria que seus usuários tenham foto de perfil, mas nem todos os usuários tem foto de perfil. No lugar da foto, você, como um gênio da computação, decidiu por as iniciais do nome e sobrenome de cada usuário. Para isso crie duas variávei (nome e sobrenome) e imprima a junção da primera letra de cada uma.

4º Seu chefe é um cara muito calmo, mas as vezes ele fica estranhamente estressado e começa a gritar. Para zoar um pouco ele você deve criar um programa que imprimia a frase estou muito puuuuuto toda em maiusculo (uppercase) e em seguida ESTOU MAIS CALMO AGORAAAA em minusculo (lowercase).

5º O rato roeu a roupa do rei de roma é uma frase que irrita todos os estilistas do mundo pois eles odeiam a ideia de sua criação sendo roida. Para solucionar esse problema você deve pegar a frase O rato roeu a roupa do rei de roma remover a parte a roupa do rei de roma e em seguida colocar a frase uma queijada de leve e não a roupa do rei fazendo a frase final ficar assim O rato roeu uma queijada de leve e não a roupa do rei. Diga: busque por slice()

6º Maria Júlia tem 5 anos e esta aprendendo a contar. Para isso ela está contando o nome do seu pai (Ricardo Antônio Lopes Lemos Silva Júnior) e sua mãe (Joaquina Pereira Freitas Oliveira Silva). Com preguiça de conferir esse resultado e prevendo que sua filha iria contar nome de outras pessoas Joaquina pediu a você que criasse um programa que recebe um nome e imprime quantas letras esse nome tem. Lembre-se você deve retirar os espaços do nome 😉

Array
1º Professor Marcelo com preguiça de verificar a quantidade de alunos que ele possui pediu pra você criar um código que receba um array com a lista de nome dos alunos e imprima a quantidade de alunos nessa lista. Você que é "mais melhor de bom" que o previsto irá imprimir a quantidade de alunos e o primeiro e último aluno

2º Existe um ranking de melhores programadores do Brasil, é uma lista com 300 pessoas. Você deve criar um programa que receba um array com o nome de pessoas e mostrar somente um array com as 3 primeiras posições. Usar splice

3º Você foi designado como gerente do Super Mercado Paçoquinha, como primeiro feito você deve criar um programa para o caixa. O programa deve imprimir uma lista com os produtos, mas você deve simular como se fosse um caixa, ou seja, adicionar o nome de cada um dos produtos um por um. Crie a variável caixa que será um array vazio e em seguida adicione 5 produtos, um por um, o final do array. Dica: buscar pesquisar por push

4º O gerente do Super Mercado Paçoquinha adorou o programa que você fez acima, porém dele deparou com um probleminha. Ele acabou atendendo um cliente que queria alterar o primeiro produto por outro mas seu programa não conseguia fazer isso. Então você como o melhor gerente do Brasil decidiu fazer essa alteração. Para isso você deve retirar o primeiro elemento do array e depois por um novo elemento no inicio do array. Retire do array a baixo o Pão e adicione Cuscuz. Dica: Busque por shift e unshift

let caixa = ["Pão", "Mortandela", "Leite", "Ovo", "Manteiga"];
5º Você recebeu a proposta multimilionária de atualizar o sistema do Banco do Brasil. Quando você estava atualizando as datas de movimentação de dinheiro percebeu que as datas eram armazenadas da seguinte forma: let data = [10, 05, 2021] onde a primeira posição era o dia, depois o mês e a ultima o ano. Então você deve alterar de array para string e pondo no seguinte formato: let data = "10/05/2021" para melhorar o banco e virar milhonário. Dica: Busque por join

6º A escolinha do Professor Raimundo decidiu automatizar a entrada de alunos. Sempre que um aluno entrar na escola ele deve digitar seu nome e aparecerá na tela o número dele na lista. Para isso você recebeu a lista de alunos:

let alunos = ["Pedro", "Felipe", "Ana Cláudia", "Luiza", "Mariana"]
Agora com a lista crie um código que verifique se o aluno existe na lista (caso o aluno exista imprima "Aluno existe" se não "Aluno inexistente") e em seguida, caso exista, deve imprimir a posição dele na lista. Dica: Buscar por includes, indexOf e lastIndexOf

7º O Super Mercado Paçoquinha decidiu melhorar novamente seu sistema de caixa. Dessa vez ele quer substitui qualquer elemento do caixa em qualquer posição. Na lista abaixo você deve buscar por "Leite" e substituir ele por "Cuscuz" e depois substituir "Ovo" por "Biscoito". Para isso você deve criar uma variável chamada buscarPor que irá receber "Cuscuz" e em seguida pesquisar se a variável buscarPor existe no array. Se existir pegue a posição dela e altere essa posição pelo valor de buscarPor, se não imprima "Esse produto não existe na lista". Em seguida repita o processo trocando "Ovo" por "Biscoito". Dica: Buscar por includes, indexOf e lastIndexOf

let caixa = ["Pão", "Mortandela", "Leite", "Ovo", "Manteiga"];
Objeto Literal
1º Luiz estava estudando programação. Ele criou um array onde armazenava, respectivamente em cada posição, o nome, sobrenome, idade, altura e profissão de uma pessoa. Um tempo depois ele aprendeu que existem objetos literais no JS e decidiu passar o array para um sintaxe de objeto. Passe o array abaixo para a sintaxe de objeto.

var pessoa = ["Roberto Carlos", "Braga", 134, 1.70, "Cantor"];
2º O Super Mercado Paçoquinha pediu por uma nova melhoria no seu projetinho. Dessa vez você tem que além de armazenar em uma lista o nome do produto deve armazenar o preço e a data de compra dele. Crie uma lista com 4 produtos, onde cada um deles deve ter o nome, data de compra e o preço.

3º No seu trabalho na Google foi lhe dado a missão de alterar o dado do usuário de CEO da empresa. Atualmente os dados dele está como no código abaixo. Você deve alterar o endereço e cadastrar a altura do CEO na variável abaixo. Altere a rua para Rua dos Bobos e o número para 0 e adicione a altura de 1.56.

var ceoGoogle = {
  nome: "Sundar",
  sobrenome: "Pichai",
  cargo: "CEO",
  rua: "Rua Microsoft",
  bairro: "Google",
  numero: 123
}
4º Você deseja conhecer novas formas de acessa objetos. Tente acessa o objeto acima de uma forma diferente. Para isso você deve criar uma variável que receberá uma string que será o valor de uma das chaves. Em seguida use essa variável para acessar um valor do objeto acima. Depois altere o valor da variável para outra chave e rode seu código novamente!

5º Baseado no exercíco acima, reescreva o código abaixo para acessar o valor imprimesso através de variável, ou seja, não use o artifício do ., acesse tudo através de variáveis.

const produto = {
  info: {
    nome: "Camisa",
    descricao: "Camisa mó da hora",
    valor: 3.99
  },
  categoria:{
    nome: "Roupa",
    descricao: "Aqui tem todo tipo de roupa"
  },
  quantidade: 5,
  criado_em: "10/10/2013"
}
console.log(produto.categoria)
console.log(produto.categoria)
console.log(produto.info.nome)
6º Na empresa onde você trabalha existe um sistema que gerencia os funcionários. Todo funcionário possui os dados pessoais (nome, sobrenome, idade), endereço (rua, numero, bairro) e cargo. Você deve criar um array chamado funcionarios com 3 funcionários, cada posição do array será um funcionário, e cada um deles deve ser um objeto. Em cada um dos funcionários deve contendo a chave dadosPessoais (com os valores dos dados pessoais acima), endereco (com os valores do endereço acima) e o cargo. Imprima a variável funcionários e depois imprima o valor da posição 2.

Condicionais
if/else + operators
1º Você possui uma casa de festa para maiores de 18 anos. Crie uma variável chamada idade e imprima para maiores de 18 Pode entrar! e para menores Pode entrar não, seu de menor!

2º Seu chefe possui um coração bom e decidiu dar aumento no salário de todos os funcionário. Ele pediu para você adicionar R$200,00 aos funcionários que possuem mais de 18 anos e R$500,00 para que tem mais de 45 anos. Adicione esse valor no salários dos dois funcionários a baixo usando a estrutura fornecida.*/

let funcionario1 = {
    nome: "Maria Silva",
    idade: 54,
    salario: 1700.50
}

let funcionario2 = {
    nome: "Roberto Carlos",
    idade: 23,
    salario: 1400.70
}

