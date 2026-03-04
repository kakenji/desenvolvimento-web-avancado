let requests = [12, 30, 5, 18, 40, 22, 8];
let limite = 25;
let totalValid = 0;
let totalExceed = 0;
let greatest = requests[0];

for (let i = 0; i < requests.length; i++) {
  if (requests[i] > greatest) {
    greatest = requests[i];
  }
  if (requests[i] <= limite) {
    console.log("OK");
    totalValid++;
  } else {
    console.log("LIMIT EXCEED");
  }
}
console.log("Total de requisições válidas: " + totalValid);
console.log("Maior número: " + greatest);
