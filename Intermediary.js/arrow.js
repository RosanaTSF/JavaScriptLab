function soma(x, y) {
return x + y;
}

//sem arrow
const multiplicacao = function(x, y) {
return x * y;
}; 

console.log(multiplicacao(2, 2));

//com arrow (a const entenderá que é uma função e naão precisa colocar o nome)
const dividir = (x, y) => {
return x / y;
};

const objeto = () => ({ Name: 'Ariel', Surname: 'Disney' })