const swiper = new Swiper(".swiper", {
	speed: 400,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
	},
});
