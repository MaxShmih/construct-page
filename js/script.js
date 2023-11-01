const header = document.querySelector('.header');
const scrollBlock = document.querySelector('.hero__scroll');
const burger = document.querySelector('.menu__btn');
const burgerMenu = document.querySelector('.burger__wrapp')

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	burgerMenu.addEventListener('click', function() {
		burgerMenu.classList.remove('active')
		burger.classList.remove('active')
	})
})

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
