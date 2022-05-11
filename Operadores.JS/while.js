var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
    achou = true;
    } else {
    console.log(
        "Possível valor não corresponde ao número sorteado " + possivelValor
    );  
  }
}

//O comando += significa "possivelValor + 1"
//while é usado quando não sabe onde vai parar, mas cria-se uma flag em while(!achou) para substituir o "break".