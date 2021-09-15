function atualizarTexto() {
    const nome = document.getElementById('nome').value;
    document.getElementById('texto').innerHTML = `<h1>Olá, ${nome}!</h1>`;
}