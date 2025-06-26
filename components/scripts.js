// LOGIN SCREEN ANIMATION:
window.addEventListener("load", function () {
    // Adiciona classe global para animação dos carros
    document.body.classList.add("loaded");

    // Seleciona os elementos a serem animados
    const header = document.getElementById("header");
    const list = document.getElementById("slide-aside");
    const car = document.getElementById("slide-article");

    // Mostra header após 2 segundos
    setTimeout(() => {
        header.classList.add("show");
    }, 2000);

    // Slide-in para aside e article (se existirem)
    if (list) {
        setTimeout(() => {
            list.classList.add("slide-in");
        }, 2300); // 300ms depois
    }

    if (car) {
        setTimeout(() => {
            car.classList.add("slide-article");
        }, 2550); // 550ms depois
    }
});
// animação.js
window.addEventListener("load", () => {
    // Ativa classe de carregamento
    document.body.classList.add("loaded");

    // Exibe header com delay
    const header = document.getElementById("header");
    setTimeout(() => {
        header.classList.add("show");
    }, 2000);
});
