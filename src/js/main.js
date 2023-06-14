'use strict';
//esconder el menu
//llama el menú
const accionMenu = document.querySelector("#cabezote");
//marca la posición previa
let posicionYprevia = window.pageYOffset;
//toma el elemento de window y cuando hay cambio ejecuta función
window.onscroll = function() {
	//crea la posiscion actual
	let posicionYactual = window.pageYOffset;
	// a partir de este punto enpieza a evaluar
	if (posicionYactual > 100) {
		// esconde cuando la posicion actual es mayor que la anterior
		// muestra cuando la posicion anterior es mayor que la actual
		if (posicionYprevia > posicionYactual) {
			accionMenu.classList.remove('cabezote--esconder');
		} else {
			accionMenu.classList.add('cabezote--esconder');
		}
		// reseteea las posiciones
		posicionYprevia = posicionYactual;
	};
};