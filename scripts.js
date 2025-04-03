// Пример простого скрипта для анимации или взаимодействия
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ffcc00';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });
});
