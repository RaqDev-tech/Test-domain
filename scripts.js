document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        responseDiv.textContent = 'Obrigado pelo contato! Em breve, entraremos em contato com você.';
        form.reset();
    });
});
