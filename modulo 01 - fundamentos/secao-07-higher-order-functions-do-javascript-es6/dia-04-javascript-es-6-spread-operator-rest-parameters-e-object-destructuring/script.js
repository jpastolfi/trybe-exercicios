// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Pera', 'Limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Açaí', 'Tapioca', 'Salada'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];
console.log(fruitSalad(specialFruit, additionalItens));