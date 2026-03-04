let valores = [12, 7, 25, 3, 18, 10, 2, 30];
let soma = 0;
let maior = valores[0];
let menor = valores[0];
let ind = 0;

for (let i = 0; i < valores.length; i++) {
  if (menor > valores[i]) {
    menor = valores[i];
  }
  if (maior < valores[i]) {
    maior = valores[i];
  }
  if (valores[i] > 10) {
    ind++;
  }
  soma += valores[i];
}

console.log("O maior número é " + maior);
console.log("O menor número é " + menor);
console.log("A média é " + soma / valores.length);
console.log("A quantidade de números maior que 10 é " + ind);
