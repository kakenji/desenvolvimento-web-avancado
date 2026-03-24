class Pedido{
    constructor(id, cliente, total, status){
        this.id = id;
        this.cliente = cliente;
        this.total = total;
        this.status = status
    }
}

const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];

const p1 = new Pedido(1, "Ana", 120, "aprovado")
const p2 = new Pedido(2, "Bruno", 80, "pendente")
const p3 = new Pedido(3, "Ana", 200, "aprovado")
const p4 = new Pedido(4, "Carlos", 50, "cancelado")
const p5 = new Pedido(5, "Bruno", 150, "aprovado")

const totalByClient = (arr, cliente) => {
    const totalSpent = arr
        .filter(p => p.cliente === cliente)
        .reduce((acc, p) => acc += p.total, 0)

    return {
        cliente,
        total: totalSpent
    }
}


const orderByClientHashTable = pedidos.reduce((acc, p) => {
    const nome = p.cliente

    if(!acc[nome]){
        acc[nome] = []
    }

    acc[nome].push(p)

    return acc;
}, {})

const onlyApprovedFilter = pedidos.filter(p => p.status === 'aprovado')
const onlyClientMap = pedidos.map(p => p.cliente)

const totalSalesReduce = pedidos.reduce((acc, p) => {
    return p.status === 'aprovado' ? acc + p.total : acc;
}, 0)

const mediaSalesReduce = pedidos.reduce((acc, p, i, array) => {
    acc.soma += p.total;
    acc.quantidade++;

    if(i === array.length - 1){
        acc.media = acc.quantidade > 0 ? acc.soma / acc.quantidade : 0;
    }
    return acc

}, { soma: 0, quantidade: 0, media: 0})

// console.log(onlyApprovedFilter)
// console.log(onlyClientMap)
// console.log(totalSalesReduce)
// console.log(mediaSalesReduce)
// console.log(orderByClientHashTable)
// console.log(totalByClient(pedidos, "Ana"))

