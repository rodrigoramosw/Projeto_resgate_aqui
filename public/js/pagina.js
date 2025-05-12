// Dados dos Pets
const petsData = [
    { imagem: "/img/dog1.jpg", nome: "Rex", idade: "3 anos", descricao: "Dócil e brincalhão." },
    { imagem: "/img/gato1.jpg", nome: "Mia", idade: "2 anos", descricao: "Amorosa e carinhosa." },
    { imagem: "/img/dog2.jpg", nome: "Thor", idade: "4 anos", descricao: "Energético e leal." }
];

// Dados dos Depoimentos
const depoimentosData = [
    { texto: "Adotar o Max foi a melhor decisão da minha vida. Ele trouxe alegria para nossa casa!", autor: "Juliana Souza" },
    { texto: "A Mel nos escolheu! Nunca imaginamos que um resgatado poderia ser tão amoroso.", autor: "Carlos Mendes" }
];

// Função para renderizar os Pets
function renderPets() {
    const source = document.getElementById("pets-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ pets: petsData });
    document.getElementById("pets-container").innerHTML = html;
}

// Função para renderizar os Depoimentos
function renderDepoimentos() {
    const source = document.getElementById("depoimentos-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ depoimentos: depoimentosData });
    document.getElementById("depoimentos-container").innerHTML = html;
}

// Renderiza os templates ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    renderPets();
    renderDepoimentos();
});
