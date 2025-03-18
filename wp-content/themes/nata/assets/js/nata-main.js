(function($) {
	'use strict';

	jQuery(document).on('ready', function () {

		// Mean Menu
		$('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});

		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});

		// Sticky, Go To Top JS
		$(window).on('scroll', function() {
			// Header Sticky JS
			if ($(this).scrollTop() >150){  
				$('.navbar-area').addClass("is-sticky");
			}
			else{
				$('.navbar-area').removeClass("is-sticky");
			};

			// Go To Top JS
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});

		// Menu Icon JS
		$(".menu-icon").on('click', function(){
			$(".menu-icon").toggleClass("active")
		})
		$(".menu-icon").on('click', function(){
			$(".sidebar").toggleClass("active")
		});
		
		// Click Event JS
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" }, 50);
		});

		// Preloader
		$(window).on('load', function() {
			$('.preloader').addClass('preloader-deactivate');
		})

		// WOW Animation
		if ($('.wow').length) {
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated', 
				offset: 0, 
				mobile: false, 
				live: true, 
			});
			wow.init();
		}

		// Popup Video JS
		$('.popup-youtube, .popup-vimeo').magnificPopup({
			disableOn: 300,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	});

	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
			// Work Slide JS
			$('.work-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 30,
				nav: true,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				navText: [
					"<i class='ri-arrow-left-s-line'></i>",
					"<i class='ri-arrow-right-s-line'></i>",
				],
			});

			// Partner Slide JS
			$('.partner-slide').owlCarousel({
				loop: false,
				margin: 30,
				nav: false,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				responsive: {
					0: {
						items: 2,
					},
					414: {
						items: 2,
					},
					576: {
						items: 3,
					},
					768: {
						items: 4,
					},
					992: {
						items: 4,
					},
					1200: {
						items: 6,
					},
				},
			});

			// Project Slide JS
			$('.project-slide').owlCarousel({
				loop: false,
				margin: 30,
				nav: true,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				navText: [
					"<i class='ri-arrow-left-s-line'></i>",
					"<i class='ri-arrow-right-s-line'></i>",
				],
				responsive: {
					0: {
						items: 1,
					},
					414: {
						items: 1,
					},
					576: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1200: {
						items: 3,
					},
					1500: {
						items: 3,
					},
				},
			});

			// Road Map Slide JS
			$('.road-map-slide').owlCarousel({
				items: 1,
				loop: false,
				margin: 30,
				nav: true,
				//dots: true,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				navText: [
					"<i class='ri-arrow-left-s-line'></i>",
					"<i class='ri-arrow-right-s-line'></i>",
				],
				responsive: {
					0: {
						items: 1,
					},
					414: {
						items: 1,
					},
					576: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1200: {
						items: 4,
					},
					1500: {
						items: 6,
					},
				},
			});

			// Complate Project Slide JS
			$('.complate-project-slide').owlCarousel({
				items: 1,
				loop: false,
				margin: 30,
				nav: true,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				navText: [
					"<i class='ri-arrow-left-s-line'></i>",
					"<i class='ri-arrow-right-s-line'></i>",
				],
				responsive: {
					0: {
						items: 1,
					},
					414: {
						items: 1,
					},
					576: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
					1200: {
						items: 3,
					},
				},
			});

			// Project Slider JS
			$('.project-slider').owlCarousel({
				items: 1,
				loop: false,
				margin: 0,
				nav: true,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				navText: [
					"<i class='ri-arrow-left-s-line'></i>",
					"<i class='ri-arrow-right-s-line'></i>",
				],
				responsive: {
					0: {
						items: 1,
					},
					414: {
						items: 1,
					},
					576: {
						items: 2,
					},
					768: {
						items: 3,
					},
					992: {
						items: 2,
					},
					1200: {
						items: 4,
					},
				},
			});

			// Reign Slide JS
			$('.reign-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 30,
				nav: true,
				dots: false,
				autoplay: false,
				smartSpeed: 1000,
				autoplayHoverPause: false,
				navText: [
					"<i class='ri-arrow-left-s-line'></i>",
					"<i class='ri-arrow-right-s-line'></i>",
				],
			});
		});
	});
})(jQuery);