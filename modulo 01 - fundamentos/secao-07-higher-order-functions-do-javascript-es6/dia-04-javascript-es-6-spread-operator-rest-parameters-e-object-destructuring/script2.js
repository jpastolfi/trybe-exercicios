const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const cadastroPessoal = {...user, ...jobInfos};
const {name, age, nationality, profession, squad, squadInitials} = cadastroPessoal;
frase = `Hi, my name is ${name}, I'm ${age} years old and ${nationality}. I'm a ${profession} in the ${squad} squad, also known as ${squadInitials}.`;
console.log(frase);