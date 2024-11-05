// Cadastro de Produtos
document.getElementById('formProdutos').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeProduto').value;
    const preco = document.getElementById('precoProduto').value;
    const resultado = document.getElementById('produtosCadastrados');

    // Validação de campos não preenchidos
    if (!nome || !preco) {
        alert('Por favor, preencha todos os campos do formulário de produtos.');
        return;
    }

    resultado.innerHTML += `<p>Produto: ${nome}, Preco: ${preco}</p>`;
    document.getElementById('formProdutos').reset();
});