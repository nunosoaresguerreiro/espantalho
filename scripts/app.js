const updateWindowSize = () => {
	const windowElement = document.querySelector('#window-size');
	windowElement.textContent = `Tamanho da janela: ${window.innerWidth} x ${window.innerHeight}`;
};

window.addEventListener('resize', updateWindowSize);

/* Navbar change color on scroll */
window.addEventListener('scroll', event => {
	if (window.scrollY >= 80) {
		document.querySelector('.navbar').classList.add('active');
	} else {
		document.querySelector('.navbar').classList.remove('active');
	}
});

/* MENU MOBILE */
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

links.forEach(link =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
	}),
);

/* VERTICAL SLIDER */
const initInfiniteVerticalSliders = () => {
	const sliders = document.querySelectorAll('.portfolio__vertical__up__left, .portfolio__vertical__up__right, .portfolio__vertical__down');

	sliders.forEach(slider => {
		const track = slider.querySelector('.portfolio__vertical__track');
		if (!track) return;

		const items = Array.from(track.children);
		items.forEach(item => {
			const clone = item.cloneNode(true);
			clone.setAttribute('aria-hidden', 'true');
			track.appendChild(clone);
		});
	});
};

initInfiniteVerticalSliders();
