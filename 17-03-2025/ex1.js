const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] },
];

const biggestPurchase = (arr) => {
  let total = 0;
  let aux = 0;
  let entity = {};
  for (n in arr) {
    total = 0;
    for (j in arr[n].compras) {
      total += arr[n].compras[j];
    }
    if (total > aux) {
      aux = total;
      entity = arr[n];
    }
  }
  console.log(entity);
  return aux;
};

const purchases = (arr) => {
  let total = 0;
  for (n in arr) {
    for (j in arr[n].compras) {
      console.log(arr[n].compras[j]);
      total += arr[n].compras[j];
    }
  }
  return total;
};

const activeUsers = (arr) => {
  for (n in arr) {
    if (arr[n].ativo) {
      console.log(arr[n]);
    }
  }
};

const legalAge = (arr) => {
  for (n in arr) {
    if (arr[n].idade >= 18) {
      console.log(arr[n]);
    }
  }
};

// console.log(biggestPurchase(usuarios));
// legalAge(usuarios);
activeUsers(usuarios);
// console.log(purchases(usuarios));