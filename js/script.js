const header = document.querySelector('.header');
const scrollBlock = document.querySelector('.hero__scroll');

scrollBlock.addEventListener('click', function(e) {
		header.scrollIntoView({
			behavior: 'smooth'
	})
})

const scrollSpan = document.querySelectorAll('.letter').forEach(el => {
	el.addEventListener('mouseenter', function(){
		el.classList.add('jump');
		setTimeout(() => {
			el.classList.remove('jump')
		}, 1000)
		})


	})
