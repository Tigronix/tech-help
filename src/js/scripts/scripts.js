(function () {
	const personCardSlider = function(){
		const $sliders = $('.js-person-card-slider');

		$sliders.slick({
			slidesToShow: 5,
			infinite: false
		});
	};

	// sliders
	personCardSlider();
})();
