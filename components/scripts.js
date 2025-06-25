// ANIMAÇÂO:
window.addEventListener("load", function () {
    const header = document.getElementById("header");
    const list = document.getElementById("slide-aside");
    const car = document.getElementById("slide-article");


    setTimeout(() => {
        header.classList.add("show");
        list.classList.add("slide-in");
        car.classList.add("slide-article");

    }, 1500, 300, 550); // atraso
});


