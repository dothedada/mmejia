const accionMenu = document.querySelector("#cabezote");
let posicionYprevia = window.scrollY;
window.onscroll = function () {
  let posicionYactual = window.scrollY;
  if (posicionYactual > 100) {
    if (posicionYprevia > posicionYactual) {
      accionMenu.classList.remove("cabezote--esconder");
    } else {
      accionMenu.classList.add("cabezote--esconder");
    }
    posicionYprevia = posicionYactual;
  }
};

