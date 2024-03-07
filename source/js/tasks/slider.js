// Тут твой код по реализации слайдера

// Переменные такого вида.
// const slider = document.querySelector('.slider');

// export function slider() {
// 	// Тут пишешь свой код
// }

export function slider () {

	const slides = document.querySelectorAll('.slider__item');
	const dots = document.querySelectorAll('.slider-pagination__btn');
	let slideIndex = 0;
	let autoSlideTimeout;
	
	dots.forEach((dot, index) => {
	  dot.addEventListener('click', () => showSlide(index));
	});
	
	function startAutoSlide() {
		autoSlideTimeout = setTimeout(() => {
		  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
		  updateSlider();
		  startAutoSlide();
		}, 5000); 
	  }
	  startAutoSlide();
	  function stopAutoSlide() {
		clearTimeout(autoSlideTimeout);
	  }
	  function showSlide(index) {
		slideIndex = index;
		updateSlider();
		stopAutoSlide();
	  }
	function updateSlider() {
	  slides.forEach((slide, index) => {
		const isActive = index === slideIndex;
		slide.classList.toggle('slider__item-active', isActive);
		slide.style.backgroundImage = ``;
		slide.style.backgroundImage = `url('./../../images/decors/slider/slide-${index}.png')`;
	  });
	
	  dots.forEach((dot, index) => {
		const isActive = index === slideIndex;
		dot.classList.toggle('slider-pagination-active', isActive);
	  });
	}
	updateSlider();
	startAutoSlide(); 
}