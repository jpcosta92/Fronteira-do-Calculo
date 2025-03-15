// Scroll suave para âncoras
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Google Maps API
function initMap() {
    var location = { lat: 38.7169, lng: -9.1399 }; // Coordenadas de Lisboa
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });
    new google.maps.Marker({
        position: location,
        map: map
    });
}

// Envio de Formulário (exemplo com alert)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});



// Script para alternar a classe "active" no menu hambúrguer
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('ul.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Obtém os elementos
const menuLinks = document.querySelectorAll('.menu-link');

// Fechar o menu quando um link for clicado
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active')
        hamburger.classList.remove('active');
    });
});

// Obtém o botão
const backToTopButton = document.getElementById('backToTop');

// Exibe o botão quando o usuário rola para baixo
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.add('hide');
    }
});

// Adiciona o comportamento de voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});