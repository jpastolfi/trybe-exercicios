//Pega os elementos para alterar
const titulos = document.querySelector('#titles');
const paragrafos = document.querySelector('#paragraphs')

//Pega os botões
const fundoBranco = document.querySelector('#fundoBranco');
const fundoPreto = document.querySelector('#fundoPreto');
const fundoVerde = document.querySelector('#fundoVerde');
const fundoAzul = document.querySelector('#fundoAzul');
const fundoAmarelo = document.querySelector('#fundoAmarelo');
//Funções para mudar as cores de fundo
const mudaCorDeFundoBranco = () => {
    titulos.style.backgroundColor = 'white';
    paragrafos.style.backgroundColor = 'white';
    localStorage.setItem('corDeFundo', titulos.style.backgroundColor);
}
const mudaCorDeFundoPreto = () => {
    titulos.style.backgroundColor = 'black';
    paragrafos.style.backgroundColor = 'black';
    localStorage.setItem('corDeFundo', titulos.style.backgroundColor);
}
const mudaCorDeFundoVerde = () => {
    titulos.style.backgroundColor = 'green';
    paragrafos.style.backgroundColor = 'green';
    localStorage.setItem('corDeFundo', titulos.style.backgroundColor);
}
const mudaCorDeFundoAzul = () => {
    titulos.style.backgroundColor = 'blue';
    paragrafos.style.backgroundColor = 'blue';
    localStorage.setItem('corDeFundo', titulos.style.backgroundColor);
}
const mudaCorDeFundoAmarelo = () => {
    titulos.style.backgroundColor = 'yellow';
    paragrafos.style.backgroundColor = 'yellow';
    localStorage.setItem('corDeFundo', titulos.style.backgroundColor);
}
//Lógica para alteração das cores de fundo
fundoBranco.addEventListener('click', mudaCorDeFundoBranco);
fundoPreto.addEventListener('click', mudaCorDeFundoPreto);
fundoVerde.addEventListener('click', mudaCorDeFundoVerde);
fundoAzul.addEventListener('click', mudaCorDeFundoAzul);
fundoAmarelo.addEventListener('click', mudaCorDeFundoAmarelo);
//Pega os botões
const corDaFontePreta = document.querySelector('#fontePreta');
const corDaFonteVermelha = document.querySelector('#fonteVermelha');
const corDaFonteBranca = document.querySelector('#fonteBranca');
//Funções para mudar as cores do texto
const mudaCorDeTextoPreto = () => {
    titulos.style.color = 'black';
    paragrafos.style.color = 'black';
    localStorage.setItem('corDaFonte', titulos.style.color);
}
const mudaCorDeTextoVermelho = () => {
    titulos.style.color = 'red';
    paragrafos.style.color = 'red';
    localStorage.setItem('corDaFonte', titulos.style.color);
}
const mudaCorDeTextoBranco = () => {
    titulos.style.color = 'white';
    paragrafos.style.color = 'white';
    localStorage.setItem('corDaFonte', titulos.style.color);
}
//Lógica para alteração das cores de fundo
corDaFonteBranca.addEventListener('click', mudaCorDeTextoBranco);
corDaFonteVermelha.addEventListener('click', mudaCorDeTextoVermelho);
corDaFontePreta.addEventListener('click', mudaCorDeTextoPreto);
//Pega os botões
tamanhoDaFonte8 = document.getElementById('tamanho8');
tamanhoDaFonte10 = document.getElementById('tamanho10');
tamanhoDaFonte12 = document.getElementById('tamanho12');
tamanhoDaFonte14 = document.getElementById('tamanho14');
tamanhoDaFonte20 = document.getElementById('tamanho20');
//Funções para alterar o tamanho da fonte
const mudaTamanhoFonte8 = () => {
    titulos.style.fontSize = '8px'
    paragrafos.style.fontSize = '8px'
    localStorage.setItem('tamanhoDaFonte', titulos.style.fontSize);
};
const mudaTamanhoFonte10 = () => {
    titulos.style.fontSize = '10px'
    paragrafos.style.fontSize = '10px'
    localStorage.setItem('tamanhoDaFonte', titulos.style.fontSize);
};
const mudaTamanhoFonte12 = () => {
    titulos.style.fontSize = '12px'
    paragrafos.style.fontSize = '12px'
    localStorage.setItem('tamanhoDaFonte', titulos.style.fontSize);
};
const mudaTamanhoFonte14 = () => {
    titulos.style.fontSize = '14px'
    paragrafos.style.fontSize = '14px'
    localStorage.setItem('tamanhoDaFonte', titulos.style.fontSize);
};
const mudaTamanhoFonte20 = () => {
    titulos.style.fontSize = '20px'
    paragrafos.style.fontSize = '20px'
    localStorage.setItem('tamanhoDaFonte', titulos.style.fontSize);
};
//Lógica para alteração do tamanho da fonte
tamanhoDaFonte8.addEventListener('click', mudaTamanhoFonte8);
tamanhoDaFonte10.addEventListener('click', mudaTamanhoFonte10);
tamanhoDaFonte12.addEventListener('click', mudaTamanhoFonte12);
tamanhoDaFonte14.addEventListener('click', mudaTamanhoFonte14);
tamanhoDaFonte20.addEventListener('click', mudaTamanhoFonte20);
//Pega os botões
espacamento1 = document.getElementById('espacamento1')
espacamentoNormal = document.getElementById('espacamentoNormal')
espacamento15 = document.getElementById('espacamento15')
espacamento20 = document.getElementById('espacamento20')
espacamento30 = document.getElementById('espacamento30')
//Funções para alterar o espaçamento
mudaEspacamento1 = () => {
    titulos.style.lineHeight = '1';
    paragrafos.style.lineHeight = '1';
    localStorage.setItem('espacamentoLinhas', titulos.style.lineHeight);
}
mudaEspacamentoNormal = () => {
    titulos.style.lineHeight = 'normal';
    paragrafos.style.lineHeight = 'normal';
    localStorage.setItem('espacamentoLinhas', titulos.style.lineHeight);
}
mudaEspacamento15 = () => {
    titulos.style.lineHeight = '1.5'
    paragrafos.style.lineHeight = '1.5'
    localStorage.setItem('espacamentoLinhas', titulos.style.lineHeight);
}
mudaEspacamento20 = () => {
    titulos.style.lineHeight = '2'
    paragrafos.style.lineHeight = '2'
    localStorage.setItem('espacamentoLinhas', titulos.style.lineHeight);
}
mudaEspacamento30 = () => {
    titulos.style.lineHeight = '3';
    paragrafos.style.lineHeight = '3';
    localStorage.setItem('espacamentoLinhas', titulos.style.lineHeight);
}
//Lógica para alteração do espaçamento
espacamento1.addEventListener('click', mudaEspacamento1);
espacamentoNormal.addEventListener('click', mudaEspacamentoNormal);
espacamento15.addEventListener('click', mudaEspacamento15);
espacamento20.addEventListener('click', mudaEspacamento20);
espacamento30.addEventListener('click', mudaEspacamento30);
//Pega os botões
fonteArial = document.querySelector('#fonteArial');
fonteTimes = document.querySelector('#fonteTimes');
//Funções para alterar as fontes
mudaTipoFonteArial = () => {
    titulos.style.fontFamily = 'Arial, Helvetica, sans-serif';
    paragrafos.style.fontFamily = 'Arial, Helvetica, sans-serif';
    localStorage.setItem('tipoDaFonte', titulos.style.fontFamily);
};
mudaTipoFonteTimes = () => {
    titulos.style.fontFamily = 'Times New Roman, Times, serif';
    paragrafos.style.fontFamily = 'Times New Roman, Times, serif';
    localStorage.setItem('tipoDaFonte', titulos.style.fontFamily);
};
//Lógica para alterar as fontes
fonteArial.addEventListener('click', mudaTipoFonteArial);
fonteTimes.addEventListener('click', mudaTipoFonteTimes);
/* //Cria os item no localStorage
localStorage.setItem('corDeFundo', null);
localStorage.setItem('corDaFonte', null);
localStorage.setItem('tamanhoDaFonte', null);
localStorage.setItem('espacamentoLinhas', null);
localStorage.setItem('tipoDaFonte', null);
 */

window.onload = recuperaPreferencias = () => {
    titulos.style.backgroundColor = localStorage.getItem('corDeFundo');
    paragrafos.style.backgroundColor = localStorage.getItem('corDeFundo');
    titulos.style.color = localStorage.getItem('corDaFonte');
    paragrafos.style.color = localStorage.getItem('corDaFonte');
    titulos.style.fontSize = localStorage.getItem('tamanhoDaFonte');
    paragrafos.style.fontSize = localStorage.getItem('tamanhoDaFonte');
    titulos.style.lineHeight = localStorage.getItem('espacamentoLinhas');
    paragrafos.style.lineHeight = localStorage.getItem('espacamentoLinhas');
    titulos.style.fontFamily = localStorage.getItem('tipoDaFonte');
    paragrafos.style.fontFamily = localStorage.getItem('tipoDaFonte');
}
