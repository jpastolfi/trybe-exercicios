/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array: */

const exp = require('constants');
const myRemove = require('./script');

describe('Testa a função myRemove', () => {
	/* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado; */
	test('testa se a função funciona', () => {
		expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	});
	/* Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]; */
	test('testa se a função não retorna a array original', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});
	/* Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado. */
	test('testa a função com um número que não está no array', () => {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});
