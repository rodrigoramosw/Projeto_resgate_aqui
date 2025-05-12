const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuração do Handlebars
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => res.redirect('/pagina'));
app.get('/login', (req, res) => {
    res.render('login', {
        layout: 'main',
        titulo: 'Login',
        camposLogin: [
            { id: 'username', label: 'Usuário', tipo: 'text', nome: 'username', placeholder: 'Digite seu nome de usuário' },
            { id: 'password', label: 'Senha', tipo: 'password', nome: 'password', placeholder: 'Digite sua senha' }
        ]
    });
});

app.get('/pagina', (req, res) => {
    res.render('pagina', {
        layout: 'main',
        titulo: 'Adote um Amigo ❤',
        subtitulo: 'Dê uma segunda chance a um pet. Adote e transforme uma vida!',
        descricaoProjeto: 'Somos uma organização dedicada a promover a adoção de animais abandonados...',
        descricaoProdutos: 'Oferecemos produtos exclusivos para cuidar do seu novo amigo...',
        mensagemProfissionais: 'Se você é veterinário, adestrador ou trabalha com pets, junte-se a nós para transformar vidas!',
        ano: 2025,
        contato: '📍 Recife, PE | 📞 (81) 98002-8922 | 📧 contato@adoteamigo.com'
    });
});

// Outras rotas para produtos, cadastro, sobre, etc...

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
