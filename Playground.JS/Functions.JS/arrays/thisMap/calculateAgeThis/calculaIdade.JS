function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const vila1 = {
    nome: 'Arlequina',
    idade: 15,
};

const vilao2 = {
    nome: 'Meowth',
    idade: 3,
    tipo: 'gato',
};

const vilao3 = {
    nome: 'Cruel',
    idade: 5,
    tipo: 'gato',

};

/*
console.log(calculaIdade.call(vila1, 15));
*/

//apply a única diferença é que tem que ter colchetes.
console.log(calculaIdade.apply(vilao2, [4]));