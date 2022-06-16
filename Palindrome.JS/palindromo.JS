function verificaPalindromo(string) {
    if(!string) return "string inexistente";

   return string.split("").reverse().join("") === string;
}
/*

console.log(verificaPalindromo("ama")); */

// Solução 2:

// omo
// 012
// abba
// 0123

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
    }

    console.log(verificaPalindromo2("abba"));