//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'Penélope';
console.log(typeof(nome));

// como declarar
var variavel = 'Tartaruga Ninja';
variavel = 'Gargamel';
console.log(variavel);

let variavel2 = 'Batatinha'
variavel2 = 'Pica-pau';
console.log(variavel2);

const constante = 'Imortais'

//Escopos

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();

