const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Устанавливаем индекс для начала отсчёта слайдов
let index = 0;

// Функция которая убирает класс active и добавляет к текущему слайду
function activeSlide(index) {
	for (let slide of slides) {
		slide.classList.remove('active');
	}
	slides[index].classList.add('active');
}

// Функция которая убирает класс active и добавляет к текущей точке
function activeDot(index) {
	for (let dot of dots) {
		dot.classList.remove('active');
	}
	dots[index].classList.add('active');
}

// Функция которая будет запускать activeSlide и activeDot
function getActive(index) {
	activeSlide(index);
	activeDot(index);
}

// функция переключения слайда + когда доходит до конца начинает заново
function nextSlide() {
	if (index == slides.length - 1) {
		index = 0;
		getActive(index)
	} else {
		index++;
		getActive(index);
	}
}

// функция переключения слайда назад + когда доходит до конца начинает заново
function prevSlide() {
	if (index == 0) {
		index = slides.length - 1;
		getActive(index);
	} else {
		index--;
		getActive(index);
	}
}

// делаем переключение по dots
dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		getActive(index)
	})
})

// вешаем прослушку на кнопки с вызовом функции
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

// ставим автопереключение слайдов
//setInterval(nextSlide, 2500);