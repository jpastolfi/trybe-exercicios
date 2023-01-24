/* Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 99;

if (nota > 100 || nota < 0) {
    console.log('Nota inválida. Insira uma nota maior do que 0 e menor do que 100.');
} else if (nota >= 90) {
    console.log('Sua nota é A');
} else if (nota >= 80) {
    console.log('Sua nota é B');
} else if (nota >= 70) {
    console.log('Sua nota é C');
} else if (nota >= 60) {
    console.log('Sua nota é D');
} else if (nota >= 50) {
    console.log('Sua nota é E');
} else {
    console.log('Sua nota é F');
}

/* Há um par entre nós
Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
 */

const num1 = 1;
const num2 = 1;
const num3 = 2;
let isEven = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    isEven = true;
}

console.log(isEven)


/* Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
 */

const num4 = 1;
const num5 = 4;
const num6 = 6;
let isOdd = false;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
    isOdd = true;
}

console.log(isOdd)