'use strict';

var qs = function qs(sel) {
	return document.querySelector(sel);
};
var qsa = function qsa(sel) {
	return document.querySelectorAll(sel);
};
var APP = {
	name: 'HTML Starter'
};

(function () {
	var personCardSlider = function personCardSlider() {
		var $sliders = $('.js-person-card-slider');

		$sliders.slick({
			slidesToShow: 5,
			infinite: false
		});
	};

	// sliders
	personCardSlider();
})();
//# sourceMappingURL=main.js.map
