const createItem = require('./createItem');
describe('a função createItem', () => {
  // Teste se a função createItem cria um item válido.
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20))
  .toEqual({ name: 'banana', quantity: 20, unit: 'kg', price: 1.99})
});
  // Teste se a função createItem utiliza zero como quantidade padrão.
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99))
  .toEqual({ name: 'banana', quantity: 0, unit: 'kg', price: 1.99})});
  // Teste se a função createItem lança algum erro quando não recebe parâmetros.
  // Teste se a função createItem lança algum erro quando não recebe parâmetros.
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  // Teste se a função createItem lança um erro se o nome do item não é uma string.
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1, 2, 3, 4)).toThrow('O nome do item deve ser uma string');
  });
  // Teste se a função createItem lança um erro se o preço do item é negativo ou zero.
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('batata', 'kg', -10, 10)).toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('maçã', 'kg', 0, 10)).toThrow('O preço do item deve ser maior que zero')
  });
});


