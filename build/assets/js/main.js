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
	// sliders
	var personCardSlider = function personCardSlider() {
		var $sliders = $('.js-person-card-slider');

		$sliders.slick({
			slidesToShow: 5,
			infinite: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	};

	var advantagesSlider = function advantagesSlider() {
		var $sliders = $('.js-advantages-slider');
		var options = {
			slidesToShow: 3,
			infinite: false
		};

		$(window).on('load resize orientationchange', function () {
			$sliders.each(function () {
				var $slider = $(this);
				var isDesktop = $(window).width() > 768;
				var isSliderActive = $slider.hasClass('slick-initialized');

				if (isDesktop) {
					if (!isSliderActive) {
						$slider.slick(options);
					}
				} else {
					if (isSliderActive) {
						$slider.slick('unslick');
					}
				}
			});
		});
	};

	var popularServices = function popularServices() {
		var $sliders = $('.js-services-slider');
		var options = {
			slidesToShow: 1,
			infinite: false,
			mobileFirst: true,
			dots: true
		};

		$(window).on('load resize orientationchange', function () {
			$sliders.each(function () {
				var $slider = $(this);
				var isDesktop = $(window).width() > 768;
				var isSliderActive = $slider.hasClass('slick-initialized');

				if (isDesktop) {
					if (isSliderActive) {
						$slider.slick('unslick');
					}
				} else {
					if (!isSliderActive) {
						$slider.slick(options);
					}
				}
			});
		});
	};

	// others
	var selectChange = function selectChange() {
		var selectWraps = document.querySelectorAll('.js-select-wrap');

		selectWraps.forEach(function (selectWrap) {
			var select = selectWrap.querySelector('.js-select');

			select.addEventListener('change', function () {
				select.classList.add('changed');
			});
		});
	};

	var phoneMask = function phoneMask() {
		var $phoneInputs = $('.form-elem--phone');

		$phoneInputs.mask('+7 (000)-000-00-00'), {
			placeholder: '123'
		};
	};

	var checkboxLink = function checkboxLink() {
		var checkboxLinks = document.querySelectorAll('.js-checkbox-link');

		checkboxLinks.forEach(function (checkboxLink) {
			var input = checkboxLink.querySelector('.checkbox__input');
			var href = checkboxLink.getAttribute('data-href');

			input.addEventListener('change', function () {
				var isChecked = this.checked;

				if (isChecked) {
					location.replace(href);
				}
			});
		});
	};

	var menu = function menu() {
		var body = document.querySelector('body');
		var aside = document.querySelector('.js-aside');
		var btn = document.querySelector('.js-btn-menu');
		var imgOpen = btn.querySelector('.js-menu-img-open');
		var imgClose = btn.querySelector('.js-menu-img-close');

		var open = function open(btn) {
			btn.classList.add('active');
			aside.classList.add('active');
			body.classList.add('overflow');
		};

		var close = function close(btn) {
			btn.classList.remove('active');
			aside.classList.remove('active');
			body.classList.remove('overflow');
		};

		btn.addEventListener('click', function () {
			var isActive = this.classList.contains('active');

			if (isActive) {
				close(this);
			} else {
				open(this);
			}
		});
	};

	// sliders
	personCardSlider();
	advantagesSlider();
	popularServices();

	// others
	selectChange();
	phoneMask();
	checkboxLink();
	menu();
})();
//# sourceMappingURL=main.js.map
