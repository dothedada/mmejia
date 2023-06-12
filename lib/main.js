'use strict';
// Scroll suavecito
$(document).ready(function(){
	$('a').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html').animate({
				scrollTop: $(hash).offset().top
			}, 500, function(){
				window.location.hash = hash;
			});
		}
	});
});

//esconder el menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (currentScrollPos > 1) {
		if (prevScrollpos > currentScrollPos) {
			$('header').removeClass('esconder');
			$('nav').removeClass('esconder');
		} else {
			$('header').addClass('esconder');
			$('nav').addClass('esconder');
		}
		prevScrollpos = currentScrollPos;
	};
};