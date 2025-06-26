// LOGIN SCREEN ANIMATION:
window.addEventListener("load", function () {
    const header = document.getElementById("header");
    const list = document.getElementById("slide-aside");
    const car = document.getElementById("slide-article");


    setTimeout(() => {
        header.classList.add("show");
        list.classList.add("slide-in");
        car.classList.add("slide-article");

    }, 2000, 300, 550); // atraso
});


 window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });