document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.oferta, .card-opcao, .card-menu').forEach(function(card) {
    card.addEventListener('click', function() {
        window.location.href = './pages/contato.html';
    });
});