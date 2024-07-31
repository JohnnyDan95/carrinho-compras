let totalCarrinho;

limpar();

function adicionar() {

    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let produtoEscolhido = produto.split('-')[0];
    let valorUnitario = parseInt(produto.split('R$')[1]);

    let valorSomaQuantidade = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produtoEscolhido} <span class="texto-azul">${valorSomaQuantidade}</span>
        </section>`;

    totalCarrinho = totalCarrinho + valorSomaQuantidade;

    let totalAtualizado = document.getElementById('valor-total');

    totalAtualizado.textContent = `R$${totalCarrinho}`;

    document.getElementById('quantidade').value = '0';



}

function limpar() {

    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';

}