document.querySelector('.eye')?.addEventListener('click', function () {
    const input = document.getElementById('password');
    const isPwd = input.type === 'password';
    input.type = isPwd ? 'text' : 'password';
    this.setAttribute('aria-label', isPwd ? 'Ocultar senha' : 'Mostrar senha');
    this.title = isPwd ? 'Ocultar senha' : 'Mostrar senha';
});

const country = document.getElementById('country');
const prefix = document.getElementById('prefix');
country?.addEventListener('change', () => {
prefix.value = country.selectedOptions[0].getAttribute('data-prefix') || '';
});