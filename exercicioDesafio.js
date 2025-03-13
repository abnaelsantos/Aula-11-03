let compraSuperMercado = [7.99, 9.56, 4.98, 10.52, 7.98];

function adicionarProdutosCompras(compraSuperMercado, novoProduto){
    compraSuperMercado.push(novoProduto); // push() adiciona um ou mais elemento no fina final de um array.
    return compraSuperMercado;
}

function removerProdutoPop(compraSuperMercado){
    compraSuperMercado.pop(); // pop() remove o ultimo elemento de um array.
    return compraSuperMercado;
}

function removerProdutoFilter(compraSuperMercado, valorRemocao){
    let compraSuperMercadoremovido = compraSuperMercado.filter(produto => { // filter() filtra elementos de um array com base nos critérios epecíficos.
        return produto !== valorRemocao;
    });
    return compraSuperMercadoremovido;
}

function valorCompra(compraSuperMercado){
    let valorTotal = 0;
    compraSuperMercado.forEach(produto => {
        valorTotal += produto;
    });
    return valorTotal;
}
console.log('\n')
console.log(adicionarProdutosCompras(compraSuperMercado, 20.99));
console.log(removerProdutoPop(compraSuperMercado));
console.log(removerProdutoFilter(compraSuperMercado, 9.56));
console.log('\n')
console.log(' Valor total da compra é de: ',valorCompra (compraSuperMercado));

