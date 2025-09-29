const btn = document.querySelector('.toggle-pass');
const input = document.getElementById('password');
const eye = btn.querySelector('.eye');

btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.setAttribute('aria-pressed', String(isPassword));
    btn.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');

            // alterna ícone (olho aberto/fechado) mudando o path
eye.innerHTML = isPassword
    ? '<path fill="currentColor" d="M12 5c-5 0-9 4.5-9 7s4 7 9 7 9-4.5 9-7-4-7-9-7Zm0 11a4 4 0 1 1 .001-8.001A4 4 0 0 1 12 16Z"/>'
    : '<path fill="currentColor" d="M3 12c0 2.5 4 7 9 7 1.7 0 3.3-.5 4.7-1.3l1.6 1.6 1.4-1.4-16-16-1.4 1.4 2.5 2.5C3.6 8.4 3 10 3 12Zm6.6-2 4.4 4.4A4 4 0 0 0 9.6 10Z"/>';
        });