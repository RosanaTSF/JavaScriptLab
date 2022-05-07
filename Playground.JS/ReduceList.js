const lista = [
    {
        name: 'chocolate',
        preco: 30
    },
    {
        name: 'sorvete',
        preco: 50
    },
    {
        name: 'sushi',
        preco: 200
    }   
];

saldoDisponível = 1000;

function calculaSaldo(saldoDisponível, lista) {
return lista.reduce(function (prev, current, index) {
    console.log("rodada", index +1)
    console.log({prev})
    console.log({current})
    return prev - current.preco;
    }, saldoDisponível);
}

console.log(calculaSaldo(saldoDisponível, lista));