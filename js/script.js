const screenWidth = document.body.clientWidth;
const styleSheet = document.styleSheets[0];
const widthRule = styleSheet.insertRule('.header::after { width: ' + screenWidth + 'px; }', styleSheet.cssRules.length);
const container = document.querySelector('.container');
const containerWidth = container.offsetWidth;
const lineBackdown = (containerWidth - screenWidth);
const lineRule = styleSheet.insertRule('.header::after { left: ' + lineBackdown / 2 + 'px; }', styleSheet.cssRules.length);

const header = document.querySelector('.header');
const scrollBlock = document.querySelector('.hero__scroll');

scrollBlock.addEventListener('click', function(e) {
		header.scrollIntoView({
			behavior: 'smooth'
	})
})

const scrollSpan = document.querySelectorAll('.letter').forEach(el => {
	el.addEventListener('mouseenter', function(){
		el.classList.add('puls');
		setTimeout(() => {
			el.classList.remove('puls')
		}, 1000)
		})


	})
