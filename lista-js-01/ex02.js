let produto = "açaí";
let preco = 20;
let quantidade = 10;

function valorTotalEstoque(produto, preco, quantidade) {
  return `O valor total em estoque de ${produto} é ` + preco * quantidade;
}

console.log(valorTotalEstoque(produto, preco, quantidade));
