/* Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto); */

const custo = 1;
const valor = 3;
const quantidade = 1000;
const aliquitaDeImposto = 1.2;
const custoTotal = custo * aliquitaDeImposto;
let lucro;

if (custo < 0 || valor < 0 || quantidade < 0 || aliquitaDeImposto < 0) {
  console.log('Favor inserir somente valores positivos.')
} else {
  lucro = (valor - custoTotal) * quantidade;
}

console.log('O lucro total foi de ' + lucro + ' reais.');

/* Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.




A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88


IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55. */

const salarioBruto = 1000.00;
let aliquotaSS;
let aliquotaIR;
let deducao;
let salarioQuaseLiquido;
let salarioLiquido;

if (salarioBruto > 5189.82) {
  valorSS = 570.88;
} else if (salarioBruto > 2594.93) {
  aliquotaSS = 0.11;
} else if (salarioBruto > 1556.95) {
  aliquotaSS = 0.09;
} else {
  aliquotaSS = 0.08;
}

if (salarioBruto > 5189.82) {
  salarioQuaseLiquido = salarioBruto - valorSS;
} else {
  salarioQuaseLiquido = salarioBruto * (1 - aliquotaSS);
}


if (salarioQuaseLiquido > 4664.68) {
  aliquotaIR = 0.275;
  deducao = 869.36;
} else if (salarioQuaseLiquido > 3751.06) {
  aliquotaIR = 0.225;
  deducao = 636.13;
} else if (salarioQuaseLiquido > 2826.66) {
  aliquotaIR = 0.15;
  deducao = 354.80;
} else if (salarioQuaseLiquido > 1903.99) {
  aliquotaIR = 0.075;
  deducao = 142.80
} else {
  aliquotaIR = 0;
  deducao = 0;
}

IRPF = (salarioQuaseLiquido * aliquotaIR) - deducao;

salarioLiquido = salarioQuaseLiquido - IRPF;

console.log(salarioLiquido);