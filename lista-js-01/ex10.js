let par = 0;
let impar = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    par++;
  } else {
    impar++;
  }
}

console.log("Quantidade de pares: " + par);
console.log("Quantidade de ímpares: " + impar);
