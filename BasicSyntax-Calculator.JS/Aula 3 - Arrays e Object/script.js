// O que são vetores ou arrays.

// Como declarar um array.
//let array = ['string', 1, true];
//console.log(array);

// Um array pode guardar vários tipos de dados.
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(array[0]);

/* Manipulando Arrays:
array.forEach(function(item, index){console.log(item, index)});

array.push('novo item');
console.log(array); 

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('novo item no início');
console.log(array); 

console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array);

let novoArray = array.slice(0, 3);
console.log(array); */

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objetoInterno: {objetoInterno: 'objeto interno'}};

console.log(object.boolean); 

/* Fazendo Desestruração.

var string = object.string;
console.log(string); */

var arrayInterno = object.array;
console.log(arrayInterno); 

var {string, boolean, objetoInterno} = object;
console.log(string, boolean, objetoInterno);
