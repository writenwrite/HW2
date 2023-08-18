const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
