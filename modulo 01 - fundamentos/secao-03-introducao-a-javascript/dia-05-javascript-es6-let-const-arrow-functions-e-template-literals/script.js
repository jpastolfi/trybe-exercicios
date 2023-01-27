/* Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas.
  Modifique a variável para que respeite o escopo onde está sendo declarada.Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
  Copie o código abaixo e rode - o para verificar sua saída:
 */

/*   function imprimeIdade() {
  for (var idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
  console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
}

imprimeIdade() */

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}

imprimeIdade()


/* Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const ;
  Copie o código abaixo e rode - o para verificar sua saída:
  Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.` */

/* const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa = {
  nome: 'Luna',
  idade: 19
} */

// Altere essa estrutura para corrigir o erro.
let pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa = {
  nome: 'Luna',
  idade: 19
}

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

/* Modifique a variável para que não ocorra Erro; Copie o código abaixo e rode - o para verificar sua saída: */

/* const favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood); */

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

/* Modifique as concatenações para template literals. Copie o código abaixo: */

/* const name = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + name + ' ' + lastName + '!');
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a, b)); */

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá ${name} ${lastName}!`);
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é ${soma(a, b)}`);

/* Modifique a estrutura das funções a seguir para que elas sejam arrow functions; */

/* Transforme a função numeroAleatorio em uma arrow function; Copie o código abaixo: */
/* function numeroAleatorio() {
  return Math.random()
}*/

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

/* Transforme a função hello em uma arrow function; Copie o código abaixo: */

/* function hello(nome) {
  return `Olá, ${nome}!`
}*/

const hello = nome => `Olá, ${nome}`;
let nome = 'Ivan';
console.log(hello(nome)); 

/* Transforme a função nomeCompleto em uma arrow function; Copie o código abaixo: */

/* function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}*/

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome)); 

/* Altere a expressão if/else utilizando ternary operator; Copie o código abaixo: */

/* const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
}; */

const speedCar = speed => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
let speed = 90;
console.log(speedCar(speed)); 