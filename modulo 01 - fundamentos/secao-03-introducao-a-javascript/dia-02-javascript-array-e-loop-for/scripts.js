let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
for (let number of numbers) {
  console.log(number);
}

/* Some todos os valores contidos no array e imprima o resultado; */
let sum = 0;
for (let number of numbers) {
  sum += number
}

console.log(sum);

/* Calcule e imprima a média aritmética dos valores contidos no array; */

media = sum / numbers.length;
console.log(media);

/* Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */

if (media > 20) {
  console.log('valor maior que 20')
} else if (media <= 20) {
  console.log('valor menor ou igual a 20')
}

/* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let maiorValor = 0;

for (number of numbers) {
  if (number > maiorValor) {
    maiorValor = number;
  }
}

console.log(maiorValor);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

contadorDeImpar = 0;

for (number of numbers) {
  if (number % 2 !== 0) {
    contadorDeImpar += 1;
  }
}

if (contadorDeImpar > 0) {
  console.log(contadorDeImpar);
} else {
  console.log('nenhum valor ímpar encontrado');
}

/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let menorValor = 999;

for (number of numbers) {
  if (number < menorValor) {
    menorValor = number;
  }
}

console.log(menorValor);

/* Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */

let arrayDeNumeros = [];

for (let i = 1; i <= 25; i += 1) {
  arrayDeNumeros.push(i);
}

console.log(arrayDeNumeros)

/* Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

for (let item of arrayDeNumeros) {
  console.log(item / 2);
}