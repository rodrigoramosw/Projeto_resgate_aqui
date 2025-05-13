// Função para carregar os pets dinamicamente via API
async function loadPets() {
    const templateElement = document.getElementById("pets-template");
    const container = document.getElementById("pets-container");

    // Só executa se os elementos existirem na página
    if (!templateElement || !container) return;

    try {
        const response = await fetch('/api/pets');
        if (!response.ok) throw new Error('Erro ao carregar pets');

        const pets = await response.json();

        const templateSource = templateElement.innerHTML;
        const template = Handlebars.compile(templateSource);
        const html = template({ pets });

        container.innerHTML = html;

        // Adiciona fallback para imagens que falharem
        addImageFallback();
    } catch (error) {
        console.error('Erro ao carregar pets:', error);
        container.innerHTML = '<p>Erro ao carregar animais. Tente novamente mais tarde.</p>';
    }
}

// Função: adicionar fallback para imagens que não carregam
function addImageFallback() {
    const images = document.querySelectorAll(".animal-card img");

    images.forEach(img => {
        img.onerror = function () {
            console.warn(`Imagem "${this.src}" não encontrada. Usando imagem padrão...`);
            this.src = "/img/imagem-padrao.jpg"; // Caminho da imagem de fallback
            this.alt = "Imagem não disponível";
            this.onerror = null; // Evita loop infinito
        };
    });
}

// Inicializa as funções quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    loadPets();
});