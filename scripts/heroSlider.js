/* variables */
const slides = document.querySelectorAll('.hero__slider__item');
const prevBtn = document.querySelector('#prev-heroSlider');
const nextBtn = document.querySelector('#next-heroSlider');
const auto = true;
const intervalTime = 5000;
let slideInterval;

// Índice do slide ativo
let currentSlide = 0;
const active = document.querySelector('.hero__slider .active');
// Função para mostrar o slide
const showSlide = index => {
	// Remove a classe "active" do slide atual
	document.querySelector('.hero__slider .active')?.classList.remove('active');
	// Adiciona a classe "active" ao slide correspondente
	slides[index].classList.add('active');
};

// Função para avançar o slide
const nextSlide = () => {
	currentSlide = (currentSlide + 1) % slides.length; // Avança e reinicia no início se necessário
	showSlide(currentSlide);
};

// Função para voltar ao slide anterior
const prevSlide = () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Retrocede e reinicia no final se necessário
	showSlide(currentSlide);
};

// Reinicia o autoplay
const initAuto = () => {
	if (auto) {
		clearInterval(slideInterval); // Garante que o intervalo antigo é limpo
		slideInterval = setInterval(nextSlide, intervalTime);
	}
};

// Event listeners
prevBtn.addEventListener('click', () => {
	prevSlide();
	initAuto(); // Reinicia o autoplay
});

nextBtn.addEventListener('click', () => {
	nextSlide();
	initAuto(); // Reinicia o autoplay
});

// Inicia o autoplay se ativado
initAuto();
