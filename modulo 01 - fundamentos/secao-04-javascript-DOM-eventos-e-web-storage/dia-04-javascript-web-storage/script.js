/*Requisito 1: Selecione a tag em que está escrito "Lista de Tarefas" e guarde em 
uma variável com o nome titleHeader.*/
const titleHeader = document.querySelector('.title');
/* Requisito 2: Agora troque a cor desse titúlo para sua cor preferida :) */
titleHeader.style.color = 'blue';
/* ​Requisito 3: Crie duas váriaveis com nome input e button para capturar o input e o button.*/
const input = document.getElementsByTagName('input')[0];
const button = document.querySelector('.send');
/* Requisito 4: Crie um evento para que toda vez que for clicado no botão exiba 
inicialmente um console.log('estou disparando um evento') ​*/
button.addEventListener('click',() => console.log('estou disparando um evento'))
/* Requisito 5: Agora dentro do console.log('estou disparando um evento')
troque esse valor pelo valor escrito no input */
/*Requisito 6: Crie uma variável com nome inputValue armazenando o valor do input.*/
/* Requisito 7: Crie uma tag <li></li> dentro da nossa função de click. */
/* Requisito 8: Crie uma variável chamada listItem responsável pro criar e armazenar o elemento <li></li> */
/* Requisito 9: Adicione esse <li></li> criado (listItem) dentro da nossa lista (listElement) <ul></ul>. */
/* Requisito 10: Agora precisamos adicionar o valor do input dentro de cada li. (listItem) */
button.addEventListener('click',() => {
    const inputValue = input.value;
    const listElement = document.getElementById('task');
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    listElement.appendChild(listItem);
})