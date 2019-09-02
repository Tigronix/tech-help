(function () {
	// sliders
	const personCardSlider = function () {
		const $sliders = $('.js-person-card-slider');

		$sliders.slick({
			slidesToShow: 5,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				},
			]
		});
	};

	const advantagesSlider = function () {
		const $sliders = $('.js-advantages-slider');
		const options = {
			slidesToShow: 3,
			infinite: false
		};

		$(window).on('load resize orientationchange', function () {
			$sliders.each(function () {
				const $slider = $(this);
				const isDesktop = $(window).width() > 768;
				const isSliderActive = $slider.hasClass('slick-initialized');

				if(isDesktop) {
					if(!isSliderActive) {
						$slider.slick(options);
					}
				} else {
					if(isSliderActive) {
						$slider.slick('unslick');
					}
				}
			});
		});
	};

	const popularServices = function () {
		const $sliders = $('.js-services-slider');
		const options = {
			slidesToShow: 1,
			infinite: false,
			mobileFirst: true,
			dots: true
		};

		$(window).on('load resize orientationchange', function () {
			$sliders.each(function () {
				const $slider = $(this);
				const isDesktop = $(window).width() > 768;
				const isSliderActive = $slider.hasClass('slick-initialized');

				if(isDesktop) {
					if(isSliderActive) {
						$slider.slick('unslick');
					}
				} else {
					if(!isSliderActive) {
						$slider.slick(options);
					}
				}
			});
		});
	};

	// others
	const selectChange = function () {
		const selectWraps = document.querySelectorAll('.js-select-wrap');

		selectWraps.forEach(function (selectWrap) {
			const select = selectWrap.querySelector('.js-select');

			select.addEventListener('change', function () {
				select.classList.add('changed');
			});
		});
	};

	const phoneMask = function () {
		const $phoneInputs = $('.form-elem--phone');

		$phoneInputs.mask('+7 (000)-000-00-00'), {
			placeholder: '123'
		};
	};

	const checkboxLink = function () {
		const checkboxLinks = document.querySelectorAll('.js-checkbox-link');

		checkboxLinks.forEach(function (checkboxLink) {
			const input = checkboxLink.querySelector('.checkbox__input');
			const href = checkboxLink.getAttribute('data-href');

			input.addEventListener('change', function () {
				const isChecked = this.checked;

				if(isChecked) {
					location.replace(href);
				}
			});
		});
	};

	const menu = function () {
		const body = document.querySelector('body');
		const aside = document.querySelector('.js-aside');
		const btn = document.querySelector('.js-btn-menu');
		const imgOpen = btn.querySelector('.js-menu-img-open');
		const imgClose = btn.querySelector('.js-menu-img-close');

		const open = function (btn) {
			btn.classList.add('active');
			aside.classList.add('active');
			body.classList.add('overflow');
		};

		const close = function (btn) {
			btn.classList.remove('active');
			aside.classList.remove('active');
			body.classList.remove('overflow');
		};

		btn.addEventListener('click', function () {
			const isActive = this.classList.contains('active');

			if(isActive) {
				close(this);
			} else {
				open(this);
			}
		});
	};

	const avtoSelect = function(){
		const selectBrand = document.getElementById('brand');
		const selectModel = document.getElementById('model');
		const totalText = {};
		const infoSelecor = document.querySelector('.js-total-text');

		const refreshOrderStatus = function() {
			const textNodes = infoSelecor.querySelectorAll('span');

			textNodes.forEach(function(textNode){
				textNode.remove();
			});

			infoSelecor.insertAdjacentHTML('afterbegin', `<span>${totalText.total}</span>`);
		};

		const resetModelSelect = function(modelOptions){
			selectModel.selectedIndex = 0;
			selectModel.classList.remove('checked');
		};

		const closeOptions = function(modelOptions){
			modelOptions.forEach(function(modelOption){
				modelOption.classList.add('hide');
				modelOption.classList.remove('matched');
			});
		};

		const openOptions = function(modelOption){
			modelOption.classList.remove('hide');
			modelOption.classList.add('matched');
		};

		selectBrand.addEventListener('change', function(){
			const brandValue = selectBrand.options[selectBrand.selectedIndex].value;
			const brandText = selectBrand.options[selectBrand.selectedIndex].text;
			const modelOptions = selectModel.querySelectorAll('option');
			const selectWrap = selectBrand.closest('.form-elem__wrap');

			totalText.brand = brandText;

			selectWrap.classList.add('checked');

			resetModelSelect(modelOptions);
			closeOptions(modelOptions);

			modelOptions.forEach(function(modelOption){
				const modelGroup = modelOption.getAttribute('data-group');
				const isMatched = modelGroup === brandValue;

				if(isMatched){
					openOptions(modelOption);
				}
			});
		});

		selectModel.addEventListener('change', function(){
			const modelText = selectModel.options[selectModel.selectedIndex].text;
			// const selectWrap = selectModel.closest('.se')

			selectModel.classList.add('checked');
			totalText.model = modelText;

			totalText.total = `${totalText.brand} ${totalText.model}`;

			refreshOrderStatus();
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
	avtoSelect();
})();
