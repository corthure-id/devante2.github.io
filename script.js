let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function moveSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

// Button


function visitIg() {
    window.location='https://www.instagram.com/elasddev/';
};

function visitGithub() {
    window.location='https://github.com/elasad-devante';
};