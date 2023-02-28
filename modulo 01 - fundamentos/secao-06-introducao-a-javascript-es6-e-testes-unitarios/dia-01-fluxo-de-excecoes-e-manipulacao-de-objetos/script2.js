/* Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. */
const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
const addNightShift = (objetoParaModificar, chaveParaAdicionar, valorDaChave) => objetoParaModificar[chaveParaAdicionar] = valorDaChave;
addNightShift(lesson2, Object.keys(lesson3)[3], lesson3.turno);
/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
const displayKeys = (object) => console.log(Object.keys(object));
/* Crie uma função para mostrar o tamanho de um objeto. */
const displayObjectLength = (object) => console.log(Object.entries(object).length);
/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const displayValues = (object) => console.log(Object.values(object));
/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
/* Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas. */
const totalStudentes = () => {
	let numeroEstudantesTotal = 0;
	const allKeys = Object.keys(allLessons);
	for (let i = 0; i < allKeys.length; i += 1) {
		numeroEstudantesTotal += allLessons[allKeys[i]].numeroEstudantes;
	}
	return numeroEstudantesTotal;
}
/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */
const getValueByNumber = (object, value) => {
	const allKeys = Object.keys(object);
	const chosenKey = allKeys[value];
	return object[chosenKey];
}
/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo: */
const verifyPair = (object, key, value) => {
	const allKeys = Object.keys(object);
	const keyLocation = allKeys.indexOf(key);
	const allValues = Object.values(object);
	const valueLocation = allValues.indexOf(value);
	return keyLocation === valueLocation;
}


/* Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática; */
const studentCount = (object) => {
	const allValues = [Object.values(object.lesson1), Object.values(object.lesson2), Object.values(object.lesson3)]
	let estudantesDeMatematica = 0;
	for (let i = 0; i < allValues.length; i += 1) {
		if (allValues[i][0] === 'Matemática') {
			estudantesDeMatematica += allValues[i][1]
		}
	}
	return estudantesDeMatematica;
}
/* Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. */