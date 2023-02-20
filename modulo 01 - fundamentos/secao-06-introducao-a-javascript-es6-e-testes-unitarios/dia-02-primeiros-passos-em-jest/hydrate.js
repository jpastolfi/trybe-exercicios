/* A função hydrate recebe uma string no formato “numero bebida”, e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo: */

// string recebida
/* '1 cerveja' */
// retorno da função
/* '1 copo de água' */

// string recebida
/* '1 cerveja, 2 shots e 1 catuaba' */
// retorno da função
/* '4 copos de água' */

// string recebida
/* '2 caipirinhas' */
// retorno da função
/* '2 copos de água' */
/* Implemente a função hydrate a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código. */

const hydrate = (string) => {
	//Encontra todos os números como string
	arrayDeNumerosEmString = string.match(/\d+/g);
	//Transforma todos em número e coloca em um novo array
	arrayDeNumeros = [];
	for (numero in arrayDeNumerosEmString) {
		arrayDeNumeros.push(Number(arrayDeNumerosEmString[numero]));
	}
	//Soma os números do array
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	totalDeAguas = arrayDeNumeros.reduce(reducer);
	//Retorna a string desejada com o número de águas
	if (totalDeAguas > 1) {
		return `${totalDeAguas} copos de água`;
	} else {
		return `${totalDeAguas} copo de água`;
	}
};

module.exports = hydrate;
