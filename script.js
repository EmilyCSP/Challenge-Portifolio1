document.querySelector('.formcontato__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        document.getElementById('form-message').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('form-message').style.color = 'red';
    } else {
        // Dados a serem enviados
        const templateParams = {
            from_name: nome,
            from_email: email,
            subject: assunto,
            message_html: mensagem
        };

        // Debugging para verificar os parâmetros
        console.log('Enviando e-mail com os seguintes parâmetros:', templateParams);

        // Enviar e-mail usando EmailJS
        emailjs.send('meu-servico-emailjsportifolio', 'template_portifolio', templateParams)
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response);
                document.getElementById('form-message').textContent = 'Mensagem enviada com sucesso!';
                document.getElementById('form-message').style.color = 'green';
                document.querySelector('.formcontato__form').reset();
            }, function(error) {
                console.error('Erro ao enviar e-mail:', error);
                document.getElementById('form-message').textContent = 'Erro ao enviar mensagem. Tente novamente.';
                document.getElementById('form-message').style.color = 'red';
            });
    }
});
