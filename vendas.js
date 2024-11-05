// Registro de Vendas
document.getElementById('formVendas').addEventListener('submit', function(event) {
    event.preventDefault();
    const produto = document.getElementById('produtoVendido').value;
    const quantidade = document.getElementById('quantidadeVendida').value;
    const resultado = document.getElementById('vendasRegistradas');

    // Validação de campos não preenchidos
    if (!produto || !quantidade) {
        alert('Por favor, preencha todos os campos do formulário de vendas.');
        return;
    }

    resultado.innerHTML += `<p>Produto: ${produto}, Quantidade: ${quantidade}</p>`;
    document.getElementById('formVendas').reset();
});