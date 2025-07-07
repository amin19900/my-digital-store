let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const width = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nextBtn').onclick = nextSlide;
  document.getElementById('prevBtn').onclick = prevSlide;
});
