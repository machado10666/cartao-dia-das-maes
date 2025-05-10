// Function Declaration para mostrar/esconder mensagem
function toggleMensagem() {
    const mensagem = document.getElementById('mensagem');
    const botao = document.getElementById('botaoMensagem');
    
    if (mensagem.style.display === 'block') {
        mensagem.style.display = 'none';
        botao.textContent = 'Mostrar Mensagem';
    } else {
        mensagem.style.display = 'block';
        botao.textContent = 'Ocultar Mensagem';
    }
}

// Configura o evento quando a página carrega
window.onload = function() {
    const botao = document.getElementById('botaoMensagem');
    botao.addEventListener('click', toggleMensagem);
};