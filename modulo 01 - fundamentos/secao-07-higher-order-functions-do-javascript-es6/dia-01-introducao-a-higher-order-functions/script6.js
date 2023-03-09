const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/* Crie uma função que retorne o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */
const danoDragao = () =>  randomInteger(15, dragon.strength);
/* Crie uma função que retorne o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */
const danoWarrior = () => randomInteger(warrior.strength, warrior.strength*warrior.weaponDmg);
/* Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0. */
const danoMago = () => {
  const objetoMago = {
    dano: randomInteger(mage.intelligence, mage.intelligence*2),
    manaGasta: 15,
  };
  if (mage.mana < 15) {
    objetoMago.dano = 'Não possui mana suficiente';
    objetoMago.manaGasta = 0
  }
  return objetoMago;
}

const gameActions = {
  /* Crie a primeira HOF que compõe o objeto gameActions.
  Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior. */
  turnoWarrior: () => {
    const damageWarrior = danoWarrior();
    dragon.healthPoints -= damageWarrior;
    warrior.damage = damageWarrior;
  },
  /* Crie a segunda HOF que compõe o objeto gameActions.
  Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damage e mana do mage. */
  turnoMago: () => {
    const damageMage = danoMago();
    dragon.healthPoints -= damageMage.dano;
    mage.damage = damageMage.dano;
    mage.mana -= damageMage.manaGasta;
  },
  /* Crie a terceira HOF que compõe o objeto gameActions.
  Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro. */
  turnoDragon: () => {
    const damageDragon = danoDragao();
    mage.healthPoints -= damageDragon;
    warrior.healthPoints -= damageDragon;
    dragon.damage = damageDragon;
  },
  turnResults: () => battleMembers,
}

gameActions.turnoWarrior();
gameActions.turnoMago();
gameActions.turnoDragon();
console.log(gameActions.turnResults());

/* Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno. */
