// Dados dos pets embutidos diretamente no JS
const mockPets = {
    pets: [
        {
            imagem: "dog1.jpg",
            nome: "Rex",
            idade: "3 anos",
            descricao: "Dócil e brincalhão."
        },
        {
            imagem: "gato1.jpg",
            nome: "Mia",
            idade: "2 anos",
            descricao: "Amorosa e carinhosa."
        },
        {
            imagem: "dog2.jpg",
            nome: "Thor",
            idade: "4 anos",
            descricao: "Energético e leal."
        }
    ]
};

// Dados dos depoimentos embutidos
const mockDepoimentos = {
    depoimentos: [
        {
            texto: "Adotei a Luna e ela mudou minha vida. Cheia de amor e energia!",
            autor: "Ana Clara"
        },
        {
            texto: "O processo foi rápido e muito bem orientado. Recomendo demais!",
            autor: "Carlos Eduardo"
        },
        {
            texto: "Hoje acordo todos os dias com um amigo fiel ao meu lado. Gratidão.",
            autor: "Mariana Alves"
        }
    ]
};

// Função para carregar pets com Handlebars
function loadPets() {
    const templateElement = document.getElementById("pets-template");
    const container = document.getElementById("pets-container");

    if (!templateElement || !container) return;

    const templateSource = templateElement.innerHTML;
    const template = Handlebars.compile(templateSource);
    const html = template(mockPets);

    container.innerHTML = html;
}

// Função para carregar depoimentos com Handlebars
function loadDepoimentos() {
    const templateElement = document.getElementById("depoimentos-template");
    const container = document.getElementById("depoimentos-container");

    if (!templateElement || !container) return;

    const templateSource = templateElement.innerHTML;
    const template = Handlebars.compile(templateSource);
    const html = template(mockDepoimentos);

    container.innerHTML = html;
}

// Inicializa funções quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    loadPets();
    loadDepoimentos();
});