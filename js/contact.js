document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
    const contactImg = document.getElementById('contact-img');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        statusMessage.textContent = 'Enviando...';

        try {
            const response = await fetch('https://bot-consejero-ia.netlify.app/.netlify/functions/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.code === 200) {
                statusMessage.textContent = 'Mensaje enviado correctamente!';
                statusMessage.className = 'success';
            } else {
                statusMessage.textContent = 'Lo siento, intente de nuevo.';
                statusMessage.className = 'danger';
            }

            form.reset();
        } catch (error) {
            statusMessage.textContent = 'Lo siento, intente de nuevo.';
            statusMessage.className = 'danger';
        }
    });

    // Adding animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactImg.classList.add('animate__zoomIn');
            } else {
                contactImg.classList.remove('animate__zoomIn');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(contactImg);
});