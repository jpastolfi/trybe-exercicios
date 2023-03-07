/* Imagine que você tenha passado para a etapa seguinte de uma vaga de trabalho: o desafio prático! E agora precise mostrar todas as suas habilidades em reduce, resolvendo diversas questões. */

const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

/* 1 - Calcule a quantidade total da população de todos os países. */
/* De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número. */
const getPopulation = () => countries.reduce((totalPopulation, country) => totalPopulation += country.population, 0)
/* 2 - Calcule a área total de todos os países. */
const expectedResult2 = 4311757;
const getTotalArea = () => countries.reduce((totalArea, country) => totalArea += country.area, 0);
/* 3 - Encontre o país com o maior nome. */
/* De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior. */
const expectedResult3 = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}

const longestName = () => countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
/* 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes. */
const nomesPaises = countries.map((elemento) => elemento.name);
let contadorDeA = 0;
nomesPaises.forEach((elemento) => contadorDeA += elemento.match(/\a/ig).length);
/* 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes: */
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const studentAverage = () => {
  return students.map((student, index) => ({
    name: student,
    average: (grades.map((studentGrade) => studentGrade.reduce((a,b) => a + b,0)/studentGrade.length))[index]
  }))
}