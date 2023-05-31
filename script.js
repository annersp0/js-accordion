document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const description = button.parentNode.nextElementSibling;
            const section = description.parentNode.parentNode;
            const major = button.parentNode;

            if (!description.classList.contains('visible')) {
                description.classList.add('visible');
                description.style.display = 'block';
                button.textContent = '-';
                description.style.fontSize = '0.75rem'; 
                major.style.fontSize = '0.75rem';
                section.style.height = section.scrollHeight + 'px';
            } else {
                description.classList.remove('visible');
                description.style.display = 'none';
                button.textContent = '+';
                description.style.fontSize = ''; 
                major.style.fontSize = '';
                section.style.height = '';
            }
        });
    });
});
