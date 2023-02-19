/* Para as funções encode e decode, crie os seguintes testes em Jest: */
const { encode, decode } = require('./script3');
describe('testes da função encode', () => {
	/* Teste se encode e decode são funções; */
	test('testa se encode é uma função', () => {
		expect(typeof encode).toBe('function');
	});
	/* Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; */
	test('testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
		expect(encode('felicidade')).toBe('f2l3c3d1d2');
	});
	/* Teste se as demais letras/números não são convertidos para cada caso; */
	test('testa se as demais letras/números não são convertidos', () => {
		expect(encode('jvscrpt')).toBe('jvscrpt');
	});
	/* Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */
	test('testa se o parâmetro e o retorno tem o mesmo número de caracteres', () => {
		expect(encode('palavra').length).toBe(7);
	});
});
describe('testes da função decode', () => {
	/* Teste se encode e decode são funções; */
	test('testa se decode é uma função', () => {
		expect(typeof decode).toBe('function');
	});
	/* Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente; */
	test('testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
		expect(decode('f2l3c3d1d2')).toBe('felicidade');
	});
	/* Teste se as demais letras/números não são convertidos para cada caso; */
	test('testa se as demais letras/números não são convertidos', () => {
		expect(decode('67890')).toBe('67890');
	});
	/* Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */
	test('testa se o parâmetro e o retorno tem o mesmo número de caracteres', () => {
		expect(decode('1234567').length).toBe(7);
	});
});
