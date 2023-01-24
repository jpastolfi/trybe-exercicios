/* Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

const lado1 = 90;
const lado2 = 90;
const lado3 = 0;
const somatorio = lado1 + lado2 + lado3;

if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
	console.log('Um dos ângulos fornecidos é inválido porque é menor do que zero.')
} else if (lado1 + lado2 === 90 || lado2 + lado3 === 90 || lado1 + lado3 === 90) {
	console.log('Os ângulos fornecidos não formam um triângulo válido porque dois deles somam 180 graus.')
} else if (somatorio <= 180) {
	console.log('Os ângulos formam um triângulo válido.')
} else if (somatorio > 180) {
	console.log('Os ângulos fornecidos não formam um triângulo válido porque a soma deles ultrapassa 180 graus.')
}

/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

const peca = 'REI';
const pecaCorrigida = peca.toLowerCase();

switch (pecaCorrigida) {
	case 'peao':
		console.log('A peça ' + pecaCorrigida + ' pode se mover uma casa verticalmente para a frente ou duas caso seja o movimento inicial.');
		break
	case 'torre':
		console.log('A peça ' + pecaCorrigida + ' pode se mover quantas casas quiser horizontalmente ou verticalmente em qualquer direção');
		break
	case 'cavalo':
		console.log('A peça ' + pecaCorrigida + ' pode se mover em L (três casas verticais e uma horizontal) em qualquer direlçao');
		break
	case 'bispo':
		console.log('A peça ' + pecaCorrigida + ' pode se mover quantas casas quiser diagonalmente em qualquer direção')
		break
	case 'rainha':
		console.log('A peça ' + pecaCorrigida + ' pode se mover quantas casas quiser diagonalmente, horizontalmente ou verticalmente em qualquer direção')
		break
	case 'rei':
		console.log('A peça ' + pecaCorrigida + ' pode se mover uma casa diagonalmente, horizontalmente ou verticalmente em qualquer direção')
		break
	default:
		console.log('Peça inválida.')





}