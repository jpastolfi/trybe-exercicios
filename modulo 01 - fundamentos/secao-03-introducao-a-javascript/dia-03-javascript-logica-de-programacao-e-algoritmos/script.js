/* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */

resultado = 1;

for (index = 10; index > 0; index -= 1) {
  resultado = resultado * index;
}

console.log(resultado);


/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
 */

let word = 'tryber';
let palavraInvertida = ''

for (iWord = word.length - 1; iWord >= 0; iWord -= 1) {
  palavraInvertida += word[iWord]
}

console.log(palavraInvertida);

/* Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
 */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let contadorDeLetras = 0;
let maiorComprimento = 0;
let maiorPalavra;

for (iPalavras = 0; iPalavras < array.length; iPalavras += 1) {
  contadorDeLetras = 0;
  for (iLetras = 0; iLetras < array[iPalavras].length; iLetras += 1) {
    contadorDeLetras += 1;
  }
  if (contadorDeLetras >= maiorComprimento) {
    maiorComprimento = contadorDeLetras;
    maiorPalavra = array[iPalavras];
  }
}

console.log(maiorPalavra)


array = ['java', 'javascript', 'python', 'html', 'css'];
contadorDeLetras = 0;
let menorComprimento = 100;
let menorPalavra;

for (iPalavras = 0; iPalavras < array.length; iPalavras += 1) {
  contadorDeLetras = 0;
  for (iLetras = 0; iLetras < array[iPalavras].length; iLetras += 1) {
    contadorDeLetras += 1;
  }
  if (contadorDeLetras <= menorComprimento) {
    menorComprimento = contadorDeLetras;
    menorPalavra = array[iPalavras];
  }
}

console.log(menorPalavra);

/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. */

listaPrimos = [];
let numeroDeDivisores = 1;
for (iPrimeiro = 2; iPrimeiro <= 50; iPrimeiro += 1) {
  for (iSegundo = 2; iSegundo <= 50; iSegundo += 1) {
    if (iPrimeiro % iSegundo === 0) {
      numeroDeDivisores += 1;
    }
  }
  if (numeroDeDivisores === 2) {
    listaPrimos.push(iPrimeiro);
  }
  numeroDeDivisores = 1;
}

console.log(listaPrimos[listaPrimos.length -1])