/* Para dar início a página, você deve criar algumas tags: */

/* 1. Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body; */
const tagH1 = document.createElement('h1');
tagH1.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(tagH1);
/* 2. Adicione a tag main com a classe main-content como filho da tag body; */
const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);
/* 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; */
const tagSection = document.createElement('section');
tagSection.className = 'center-content';
document.getElementsByClassName('main-content')[0].appendChild(tagSection);
/* 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */
const tagP = document.createElement('p');
tagP.innerHTML = 'Estou sofrendo para aprender a mexer no HTML com DOM!';
document.querySelector('section').appendChild(tagP);
/* 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */
const tagSection2 = document.createElement('section');
tagSection2.className = 'left-content';
document.getElementsByClassName('main-content')[0].appendChild(tagSection2);
/* 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */
const tagSection3 = document.createElement('section');
tagSection3.className = 'right-content';
document.getElementsByClassName('main-content')[0].appendChild(tagSection3)
/* 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5; */
tagImg = document.createElement('img');
tagImg.src = 'https://picsum.photos/200';
tagImg.className = 'small-image';
document.getElementsByClassName('left-content')[0].appendChild(tagImg);
/* 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6; */
tagUl = document.createElement('ul');
document.querySelector('.right-content').appendChild(tagUl);
tagUl.className = 'unordered-list';
arrayDeNumeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const tagLi = document.createElement('li');
for (i = 0; i < arrayDeNumeros.length; i += 1) {
    const tagLi = document.createElement('li');
    tagLi.innerHTML = arrayDeNumeros[i];
    document.querySelector('.unordered-list').appendChild(tagLi);
}
/* 9. Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. */
for (i = 0; i < 3; i += 1) {
    const tagH3 = document.createElement('h3');
    document.querySelector('main').appendChild(tagH3);
}

/* Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações: */

/* Adicione a classe title na tag h1 criada; */
tagH1.className = 'title';
/* Adicione a classe description nas 3 tags h3 criadas; */
for (i = 0; i < 3; i += 1) {
    document.querySelectorAll('h3')[i].className = 'description';
}
/* Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild(); */
tagParaRemover = document.querySelector('.left-content');
document.getElementsByClassName('main-content')[0].removeChild(tagParaRemover);
/* Centralize a section criada no passo 6 (aquele que possui a classe right-content). */
tagParaCentralizar = document.querySelector('.right-content');
tagParaCentralizar.style.marginRight = 'auto';
/* Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde; */
tagParaColorir = document.querySelector('.center-content')
tagParaColorir.style.backgroundColor = 'green';
/* Remova os dois últimos elementos (nove e dez) da lista criada no passo 8. */
for (i = 0; i < 2; i += 1) {
    document.querySelector('.unordered-list').lastElementChild.remove()
}