document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio tradicional

        // Pegando os valores do login
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        // Aqui você pode validar o login.
        // A autenticação pode ser ajustada conforme a necessidade
        if (usuario === 'admin' && senha === '123') {
            // Se o login for bem-sucedido, redireciona para a página
            window.location.href = '/pagina'; // Alterado de '/pagina.html' para '/pagina'
        } else {
            // Se o login falhar, exibe uma mensagem de erro
            const template = Handlebars.compile(document.getElementById('error-template').innerHTML);
            const html = template({ message: 'Usuário ou senha incorretos!' });
            document.getElementById('error-message').innerHTML = html;
        }
    });
});
