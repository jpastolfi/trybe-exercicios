/* A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false. */

const exp = require('constants');
const myFizzBuzz = require('./script2');

/* Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado. */
describe('testa a função myFizzBuzz', () => {
	test('verifica se a função retorna FizzBuzz como esperado', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});
	/* Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado. */
	test('verifica se a função retorna fizz como esperado', () => {
		expect(myFizzBuzz(3)).toBe('fizz');
	});
	/* Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado. */
	test('verifica se a função retorna buzz como esperado', () => {
		expect(myFizzBuzz(5)).toBe('buzz');
	});
	/* Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado. */
	test('verifica se a função retorna false como esperado', () => {
		expect(myFizzBuzz(2)).toBe(2);
	});
	/* Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado. */
	test('verifica se a função retorna false quando o parâmetro não é um número', () => {
		expect(myFizzBuzz('xpto')).toBe(false);
	});
});
