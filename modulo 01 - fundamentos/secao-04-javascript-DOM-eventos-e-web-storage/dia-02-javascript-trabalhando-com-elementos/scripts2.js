/* Crie um irmão para elementoOndeVoceEsta. */
irmaoElementoOndeVoceEsta = document.createElement('p');
irmaoElementoOndeVoceEsta.innerText = 'Sou irmão do elemento';
pai.appendChild(irmaoElementoOndeVoceEsta);
/* Crie um filho para elementoOndeVoceEsta. */
filhoElementoOndeVoceEsta = document.createElement('p')
filhoElementoOndeVoceEsta.innerText = 'Sou o filho do elemento';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)
/* Crie um filho para primeiroFilhoDoFilho. */
divFilhoPrimeiroFilhoDoFilho = document.createElement('div')
divFilhoPrimeiroFilhoDoFilho.innerText = 'Sou filho do primeiro filho do filho';
primeiroFilhoDoFilho.appendChild(divFilhoPrimeiroFilhoDoFilho)
/* A partir desse filho criado, acesse terceiroFilho. */
document.querySelector('div').parentElement.parentElement.nextElementSibling