const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Configuração do Handlebars
app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs'); // Define o motor de visualização como Handlebars
app.set('views', path.join(__dirname, 'views')); // Diretório para os arquivos .hbs

// Servir arquivos estáticos como o CSS e JS da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página de login
app.get('/', (req, res) => {
    res.render('login', {
        titulo: 'Página de Login',
        camposLogin: [
            { id: 'usuario', tipo: 'text', nome: 'usuario', label: 'Usuário', placeholder: 'Digite seu usuário' },
            { id: 'senha', tipo: 'password', nome: 'senha', label: 'Senha', placeholder: 'Digite sua senha' }
        ]
    });
});

// Rota para a página após login
app.get('/pagina.html', (req, res) => {
    res.render('pagina', {
        titulo: 'Página Principal'
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/pagina', (req, res) => {
    res.render('pagina', {
        titulo: 'Adote um Amigo',
        subtitulo: 'Encontre seu novo companheiro',
        descricaoProjeto: 'Nossa missão é unir lares a animais que precisam de amor.',
        descricaoProdutos: 'Confira produtos exclusivos para o seu pet.',
        mensagemProfissionais: 'Se você é veterinário ou voluntário, cadastre-se para fazer parte dessa causa.',
        ano: new Date().getFullYear(),
        contato: 'contato@adoteumamigo.com',

        pets: [
            { nome: 'Thor', idade: '2 anos', descricao: 'muito brincalhão', imagem: '/img/thor.jpg' },
            { nome: 'Luna', idade: '1 ano', descricao: 'carinhosa e calma', imagem: '/img/luna.jpg' }
        ],

        depoimentos: [
            { texto: 'Adotar a Nina foi a melhor escolha da minha vida!', autor: 'Fernanda S.' },
            { texto: 'O site facilitou muito todo o processo.', autor: 'Carlos M.' }
        ]
    });
});
