
function enviarMsg(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const msg = document.getElementById('mensagem').value.trim();

    if (!nome || !msg) {
        alert('Por favor, preencha nome e mensagem!');
        return;
    }

    const numero = '5593992263201';
    const texto = `Olá, meu nome é ${nome}. ${msg}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${numero}?text=${msgFormatada}`;

    window.open(url, '_blank');
}