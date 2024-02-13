const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
const slideWidth = slider.offsetWidth / 3; // Adjusted width for one slide

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
  slideIndex = Math.max(slideIndex - 1, 0);
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  slideIndex = Math.min(slideIndex + 1, slider.children.length - 1);
  updateSlider();
});

// Update the slider position
function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
