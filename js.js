/* Botão de Tema */

console.log('Arquivo js.js carregado!');
console.log('JavaScript carregado!');

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  if (!themeToggleButton) {
    console.error('Botão de alternar tema não encontrado!');
    return;
  }

  themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
      themeToggleButton.textContent = 'Alternar para Tema Claro';
    } else {
      themeToggleButton.textContent = 'Alternar para Tema Escuro';
    }
  });

/* Formulário */

  const form = document.getElementById('user-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();


      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const data = document.getElementById('data').value;


      if (nome && email && telefone && data) {
    
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        console.log('Data de Agendamento:', data);


        alert('Enviado com sucesso!');


        localStorage.setItem('userName', nome);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', telefone);
        localStorage.setItem('userDate', data);


        form.reset();
      } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
      }
    });
  }
});