const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// === ROTAS PARA PÁGINAS ===

// Rota principal - Login
app.get('/', (req, res) => {
    res.render('login', {
        titulo: 'Página de Login',
        camposLogin: [
            { id: 'usuario', tipo: 'text', nome: 'usuario', label: 'Usuário', placeholder: 'Digite seu usuário' },
            { id: 'senha', tipo: 'password', nome: 'senha', label: 'Senha', placeholder: 'Digite sua senha' }
        ]
    });
});

// Rota da página principal (após login)
app.get('/pagina', (req, res) => {
    res.render('pagina', {
        titulo: 'Resgate Aqui',
        subtitulo: 'Encontre seu novo melhor amigo!',
        descricaoProjeto: 'Nosso projeto conecta animais abandonados com lares cheios de amor.',
        descricaoProdutos: 'Confira nossos produtos que ajudam no cuidado com os pets.',
        mensagemProfissionais: 'Se você é um veterinário ou especialista, cadastre-se para ajudar!',
        ano: new Date().getFullYear(),
        contato: 'contato@adoteamigo.com'
    });
});

// Rota para a página de cadastro (formulário)
app.get('/cadastro', (req, res) => {
    res.render('cadastro', {
        titulo: 'Cadastro - Resgate Aqui'
    });
});

// Rota para a página de animais (pets para adoção)
app.get('/animais', (req, res) => {
    res.render('animais', {
        titulo: '🐾 Adote um Amigo',
        descricao: 'Encontre o companheiro perfeito para sua vida ❤️',
        ano: new Date().getFullYear(),
        rodapeTexto: 'Adoção de Animais. Todos os direitos reservados.'
    });
});

// === API: Dados Dinâmicos para o Frontend ===

// API para buscar lista de pets
app.get('/api/pets', (req, res) => {
    const pets = [
        { imagem: "/img/gato2.jpg", nome: "Mel", idade: "2 anos", descricao: "Gatinha carinhosa. Vacinada e castrada." },
        { imagem: "/img/dog2.jpg", nome: "Thor", idade: "3 anos", descricao: "Dócil e se dá bem com crianças." },
        { imagem: "/img/dog4.jpg", nome: "Luna", idade: "Filhote", descricao: "Brincalhona e cheia de energia." },
        { imagem: "/img/dog3.jpg", nome: "Max", idade: "5 anos", descricao: "Cão treinado, companheiro e amoroso." },
        { imagem: "/img/dog1.jpg", nome: "Rex", idade: "4 anos", descricao: "Leal e cheio de energia." },
        { imagem: "/img/gato1.jpg", nome: "Mia", idade: "1 ano", descricao: "Super carinhosa e curiosa." }
    ];
    res.json(pets);
});

// API para buscar depoimentos
app.get('/api/depoimentos', (req, res) => {
    const depoimentos = [
        { texto: "Adotar o Max foi a melhor decisão da minha vida. Ele trouxe alegria para nossa casa!", autor: "Juliana Souza" },
        { texto: "A Mel nos escolheu! Nunca imaginamos que um resgatado poderia ser tão amoroso.", autor: "Carlos Mendes" }
    ];
    res.json(depoimentos);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        tituloPagina: 'Sobre Nós - Resgate Aqui',
        tituloProjeto: 'Adote um Amigo ❤',
        paragrafosIntroducao: [
            "Somos uma organização dedicada a promover a adoção de animais abandonados e dar-lhes uma nova chance de viver.",
            "Com parcerias com clínicas veterinárias, profissionais da área e voluntários, buscamos transformar vidas todos os dias."
        ],
        introducaoRazoes: "Adotar é mais do que ganhar um amigo, é salvar uma vida. Confira abaixo alguns motivos para adotar:",
        razoesAdotar: [
            { titulo: "Amor Incondicional", descricao: "Pets adotados costumam ser extremamente gratos e leais." },
            { titulo: "Economia", descricao: "É mais barato adotar do que comprar um animal." },
            { titulo: "Reduz Abandono", descricao: "Cada adoção salva uma vida e ajuda a combater o abandono animal." }
        ],
        missao: "Promover a conscientização sobre a importância da adoção responsável e oferecer suporte ao bem-estar animal.",
        visao: "Um mundo onde todo animal tenha um lar cheio de amor e respeito.",
        valores: [
            { titulo: "Empatia", descricao: "Trabalhamos com respeito e cuidado por todas as formas de vida." },
            { titulo: "Transparência", descricao: "Todas as nossas ações são feitas com honestidade e clareza." },
            { titulo: "Compromisso", descricao: "Nos dedicamos integralmente à causa animal." }
        ],
        mensagemFinal: "Junte-se a nós nessa causa! Adote, não compre."
    });
});