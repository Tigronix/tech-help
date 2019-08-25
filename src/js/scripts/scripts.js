(function () {
	const personCardSlider = function(){
		const $sliders = $('.js-person-card-slider');

		$sliders.slick({
			slidesToShow: 5,
			infinite: false
		});
	};

	const advantagesSlider = function(){
		const $sliders = $('.js-advantages-slider');

		$sliders.slick({
			slidesToShow: 3,
			infinite: false
		});
	};

	// sliders
	personCardSlider();
	advantagesSlider();
})();
