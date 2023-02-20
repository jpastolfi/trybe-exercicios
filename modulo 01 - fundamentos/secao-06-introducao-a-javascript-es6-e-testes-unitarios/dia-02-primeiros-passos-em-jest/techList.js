const techList = (listaDeTecnologias, nome) => {
	listaDeTecnologiasOrdenada = listaDeTecnologias.sort();
	listaDeObjetos = [];
	if (listaDeTecnologiasOrdenada.length === 0) {
		return 'Vazio!';
	}
	for (i = 0; i < listaDeTecnologiasOrdenada.length; i += 1) {
		objetoDeTecnologias = {};
		objetoDeTecnologias.tech = listaDeTecnologiasOrdenada[i];
		objetoDeTecnologias.name = nome;
		listaDeObjetos.push(objetoDeTecnologias);
	}
	return listaDeObjetos;
};

module.exports = techList;
