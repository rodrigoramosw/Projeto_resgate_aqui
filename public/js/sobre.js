// Script para interatividade na página "Sobre"

// Exemplo: Adicionar funcionalidade para o botão "HOME"
const homeButton = document.querySelector('.btn');

// Verifica se o botão HOME existe e adiciona um evento de clique
if (homeButton) {
    homeButton.addEventListener('click', function () {
        // Redireciona para a página inicial
        window.location.href = 'pagina.html'; // Substitua pelo caminho correto, se necessário
    });
}

// Exemplo: Mostrar uma mensagem no console (pode ser personalizado conforme a necessidade)
console.log("Página sobre carregada corretamente");
