/* Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados. */

const num1 = 10;
const num2 = 5;

if (num1 > num2) {
    console.log('O número ' + num1 + ' é maior do que o número ' + num2 + '.')
} else if (num2 > num1) {
    console.log('O número ' + num2 + ' é maior do que o número ' + num1 + '.')
} else {
    console.log('Os números ' + num1 + ' e ' + num2 + ' são iguais.')
}

/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados. */

const num3 = 6;
const num4 = -3;
const num5 = 8;

if (num1 === num2 && num2 === num3) {
    console.log('Os três números fornecidos são iguais.')
} else if (num1 >= num2 && num1 >= num3) {
    console.log('O maior número fornecido foi ' + num1)
} else if (num2 >= num3 && num2 >= num1) {
    console.log('O maior número fornecido foi ' + num2)
} else if (num3 >= num2 && num3 >= num1) {
    console.log('O maior número fornecido foi ' + num3)
}


/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */

const valor = 0;

if (valor > 0) {
    console.log('positive');
} else if (valor < 0) {
    console.log('negative');
} else {
    console.log('zero')
}