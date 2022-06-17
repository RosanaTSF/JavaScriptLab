function filtraPares(arr) {
   return arr.filter(callback); 
}

function callback(item) {
    return item % 2 == 0; 
}

//se colocar !antes do numero 2 =>só irá retornar os números ímpares: (return item % 2 !== 0;) 


const meuArray = [0, 12, 13, 5, 7, 9];

console.log(filtraPares(meuArray));

//node filtraPares.js (terminal).