let primos = 0;

for (let i = 2; i <= 100; i++) {
  let isPrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrimo = false;
      break;
    }
  }
  if (isPrimo) {
    primos++;
  }
}

console.log(primos);
