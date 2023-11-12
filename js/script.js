const body = document.querySelector('.body');
const header = document.querySelector('.header');
const scrollBlock = document.querySelector('.hero__scroll');
const burger = document.querySelector('.menu__btn');
const burgerMenu = document.querySelector('.burger__wrapp');

const swiper = new Swiper('.swiper', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

scrollBlock.addEventListener('click', function () {
	header.scrollIntoView({
		behavior: 'smooth'
	})
})

const scrollSpan = document.querySelectorAll('.letter').forEach(el => {
	el.addEventListener('mouseenter', function () {
		el.classList.add('jump');
		setTimeout(() => {
			el.classList.remove('jump')
		}, 1000)
	})
})

function toggleBurgerMenu() {
	body.classList.toggle('active');
	burger.classList.toggle('active');
	burgerMenu.classList.toggle('active');
}

function closeBurgerMenu() {
	burgerMenu.classList.remove('active');
	burger.classList.remove('active');
	body.classList.remove('active');
}

burger.addEventListener('click', toggleBurgerMenu);
burgerMenu.addEventListener('click', closeBurgerMenu);

