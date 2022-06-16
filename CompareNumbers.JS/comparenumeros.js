//function comparaNumbers(num1, num2) {
   // const saoIguais = num1 === num2;
   // const soma = num1 + num2;

    /*
 if(saoIguais) {
        return "São iguais";
    }

    return "Não são iguais";
} */

//If ternário:

/*
return saoIguais ? "São iguais" : "não são íguais";
}  */

//Prática:

function compareNumbers(num1, num2) {
    if (!num1 || !num2) return "Defina dois números!";

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = ``;

    if(num1 !== num2) {
        saoIguais = `não`;
    }
   return `Os números ${num1} e ${num2} ${saoIguais} são iguais.` 
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(compareNumbers(11));