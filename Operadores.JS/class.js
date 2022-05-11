class Matematica {
soma(valorA, valorB) {
    return valorA + valorB;
}

subtração(valorA, valorB) {
    return valorA - valorB; 
}
 }

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4,9);

console.log(resultado);
